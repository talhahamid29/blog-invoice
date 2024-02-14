
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

  
  export async function DELETE(req) {
    try {

        const data = await req.formData()
        console.log('data is: ', data)
        const selectedId = data.get('selectedId')
        const previousimage = data.get('previousimage')
        if(!previousimage) {
            return NextResponse.json({success1 : false})
        }

        
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
        
       
        const previousImagePath = `./public/${previousimage}`;

        if (fs.existsSync(previousImagePath)) {
            // Delete the file
            fs.unlinkSync(previousImagePath);
            console.log('File deleted successfully');
        } else {
            console.log('File does not exist');
        }

        const { success1, error , result} = await queryAsync("CALL deleteBlog(?)", [selectedId]);
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

