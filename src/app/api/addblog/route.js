
import { NextRequest, NextResponse } from 'next/server';
import mysql from 'mysql';
import formidable from 'formidable';
import fs, { writeFile } from 'fs';
import path from 'path';
import multer from 'multer';
import { join } from 'path';


 
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'IndustryApp'
});

  
  export async function POST(req) {
    try {

        const data = await req.formData()
        console.log('data is: ', data)
        const image = data.get('image')
        const title = data.get('title')
        const content = data.get('content')
        if(!image) {
            return NextResponse.json({success1 : false})
        }

        const slug = title
        .toLowerCase()                 // Convert the title to lowercase
        .replace(/[^\w\s-]/g, '')      // Remove non-word characters (excluding spaces and dashes)
        .trim()                        // Trim leading and trailing spaces
        .replace(/\s+/g, '-')          // Replace spaces with dashes
        .replace(/-+/g, '-')

        const filenameParts = image.name.split('.');
        const fileExtension = filenameParts[filenameParts.length - 1];

         const bytes = await image.arrayBuffer();
        const buffer = Buffer.from(bytes)

        const path = `./public/blog_images/${slug}.${fileExtension}`
        await new Promise((resolve, reject) => {
            fs.writeFile(path, buffer, (err) => {
              if (err) reject(err);
              else resolve();
            });
          });

        const imagePath =  `/blog_images/${slug}.${fileExtension}`

        console.log('image is: ', image)
        console.log('image.name is: ', image.name)
        // const path = join('/','public','blog_images', image.name)
        // await new Promise((resolve, reject) => {
        //     fs.writeFile(path, buffer, (err) => {
        //       if (err) reject(err);
        //       else resolve();
        //     });
        //   });


      // Save the data to the database or perform other operations
      console.log('Title:', title);
      console.log('Content:', content);
      console.log('Image Path:', path);

      const queryAsync = (sql, values) => {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) {
                    console.error('Error getting MySQL connection:', err);
                    return reject({ success1: false, error: 'Failed to get MySQL connection' });
                }
                connection.query(sql, values, (err, result) => {
                    connection.release();
                    if (err) {
                        console.error('Error executing MySQL query:', err);
                        return reject({ success1: false, error: 'Failed to execute MySQL query' });
                    }
                    resolve({ success1: true, result });
                });
            });
        });
    };

    const { success1, error , result} = await queryAsync("CALL addBlogs(?, ?, ?, ?)", [title, content, slug, imagePath]);
    
    if (error) {
        console.error('Error:', error);
        return NextResponse.json(error, { status: 500 });
    }

    return NextResponse.json({ success1 , result }, { status: 200 });
  
      // Respond with success message
      } catch (error) {
        console.error('Error during blog addition:', error);
        return NextResponse.json({ success1: false, error: 'Failed to add blog' }, { status: 500 });
    }
  };

