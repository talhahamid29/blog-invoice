import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "invoiceapp",
  connectionLimit: 10,
});

export default pool;