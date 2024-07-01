const mysql = require("mysql2/promise");

const config = {
  host: "localhost",
  user: "root",
  password: "user@123",
  database: "diastest",
  port: 3306,
};

const pool = mysql.createPool(config);
const poolConnect = new Promise((resolve, reject) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.error("Error connecting to MySQL:", err);
      reject(err);
    } else {
      console.log("Connected to MySQL!");
      resolve();
    }
  });
});

module.exports = { pool, poolConnect };
