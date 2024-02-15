
import { NextRequest, NextResponse } from 'next/server';
import pool from '@/database/db';

export async function PUT(req, res) {
    try {
        const body = await req.json();
        const { selectedId } = body;

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

        const { success1, error , result} = await queryAsync("CALL deleteCustomer(?)", [selectedId]);
        
        if (error) {
            console.error('Error:', error);
            return NextResponse.json(error, { status: 500 });
        }

        return NextResponse.json({ success1 , result }, { status: 200 });
        
    } catch (error) {
        console.error('Error during customer delete:', error);
        return NextResponse.json({ success1: false, error: 'Failed to delete customer' }, { status: 500 });
    }
}