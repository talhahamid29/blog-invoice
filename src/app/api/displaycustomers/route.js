
import { NextRequest, NextResponse } from 'next/server';
import mysql from 'mysql';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'IndustryApp'
});

export async function GET(req, res) {
    try {
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

        const { success1, error , result} = await queryAsync('CALL getCustomers()', []);
        
        if (error) {
            console.error('Error:', error);
            return NextResponse.json(error, { status: 500 });
        }

        console.log('result is: ' , result[0])

        return NextResponse.json({ success1 , result : result[0] }, { status: 200 });
        
    } catch (error) {
        console.error('Error during getting customers data:', error);
        return NextResponse.json({ success1: false, error: 'Failed to get customers data' }, { status: 500 });
    }
}