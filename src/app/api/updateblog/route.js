
import { NextRequest, NextResponse } from 'next/server';
import mysql from 'mysql';
import fs, { writeFile } from 'fs';
import path from 'path';
 
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'IndustryApp'
});

  
  export async function PUT(req) {
    try {

        const data = await req.formData()
        console.log('data is: ', data)
        const image = data.get('image')
        console.log('image inside api is: ', image)
        console.log('type of image inside api is: ', typeof(image))
        const title = data.get('title')
        const content = data.get('content')
        const selectedId = data.get('selectedId')
        const previousimage = data.get('previousimage')
        if(!image) {
            return NextResponse.json({success1 : false})
        }

        const slug = title
        .toLowerCase()                 // Convert the title to lowercase
        .replace(/[^\w\s-]/g, '')      // Remove non-word characters (excluding spaces and dashes)
        .trim()                        // Trim leading and trailing spaces
        .replace(/\s+/g, '-')          // Replace spaces with dashes
        .replace(/-+/g, '-')

        console.log('slug outside if: ' , slug)
        
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
    

        if(typeof(image)==='object') {

           
            const previousImagePath = `./public/${previousimage}`;

                if (fs.existsSync(previousImagePath)) {
                    fs.unlinkSync(previousImagePath); // Delete the previous image file
                }

                const filenameParts = image.name.split('.');
                const fileExtension = filenameParts[filenameParts.length - 1];

                const bytes = await image.arrayBuffer();
                const buffer = Buffer.from(bytes)

                console.log('slug outside if: ' , slug)

                const path = `./public/blog_images/${slug}.${fileExtension}`
                await new Promise((resolve, reject) => {
                    fs.writeFile(path, buffer, (err) => {
                    if (err) reject(err);
                    else resolve();
                    });
                });

                
                

       }


       if(typeof(image)==='string') {

        const previousImagePath = `./public/${previousimage}`;

        console.log('previousImagePath is',previousImagePath)

        const fileExtension = path.extname(previousImagePath);

        const trimmedExtension = fileExtension.replace('.', '')

        const newPath = `./public/blog_images/${slug}.${trimmedExtension}`

        console.log('newPath is' , newPath)

        if (fs.existsSync(previousImagePath)) {
            fs.renameSync(previousImagePath, newPath); // Rename the previous image file
        }

        const newImagePath = `blog_images/${slug}.${trimmedExtension}`

        const { success1, error , result} = await queryAsync("CALL updateBlog(?, ?, ?, ?,?)", [title, content, slug, newImagePath,selectedId]);
        if (error) {
            console.error('Error:', error);
            return NextResponse.json(error, { status: 500 });
        }
        return NextResponse.json({ success1 , result }, { status: 200 });
            
   }


        console.log('image is: ', image)
        console.log('image.name is: ', image.name)


      // Save the data to the database or perform other operations
      console.log('Title:', title);
      console.log('Content:', content);
    //   console.log('Image Path:', path);

      
    if(typeof(image)==='object') {
        const filenameParts = image.name.split('.');
                const fileExtension = filenameParts[filenameParts.length - 1];

        const imagePath =  `/blog_images/${slug}.${fileExtension}`
        console.log('inside calling api ImagePath is :', imagePath);

                const { success1, error , result} = await queryAsync("CALL updateBlog(?, ?, ?, ?,?)", [title, content, slug, imagePath,selectedId]);
                if (error) {
                    console.error('Error:', error);
                    return NextResponse.json(error, { status: 500 });
                }
                return NextResponse.json({ success1 , result }, { status: 200 });
                
                 
       } 
      // Respond with success message
      } catch (error) {
        console.error('Error during blog addition:', error);
        return NextResponse.json({ success1: false, error: 'Failed to add blog' }, { status: 500 });
    }
  };

