const db = require("./db");

db.query("SHOW TABLES", (err, results) => {
  if (err) throw err;
  console.log("Tables in database:", results);
  db.end(); // Close connection
});
