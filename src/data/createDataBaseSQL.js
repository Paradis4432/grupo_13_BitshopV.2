const mysql = require("mysql")
con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "mydb"
})


con.connect(function (err) {
    /*con.query("CREATE DATABASE mydb", function (err, result) {
        if (err) throw err;
        console.log("Database created");
    });
    */
    /*var sql = "CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, userName VARCHAR(255), password VARCHAR(255), email VARCHAR(255))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
     */
});

