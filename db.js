const Pool = require("pg").Pool;

const pool = new Pool({
  user: "admin",
  password: "123456",
  database: "todo_db",
  host: "localhost",
  port: 5432,
});

module.exports = pool;
