import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "invoiceapp",
  connectionLimit: 1000,
});

export default pool;