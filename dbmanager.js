const sqlite3 = require('sqlite3');


function createdb() {
    const db = new sqlite3.Database('database.db', (err) => {
        if (err) {
            console.log(err);
        } else {
            db.run(`CREATE TABLE IF NOT EXISTS users(
                id integer PRIMARY KEY AUTOINCREMENT,
                name text NOT NULL,
                email text NOT NULL,
                phone text NOT NULL
                )`);
                console.log("Database created.");
        };
    });
};


function deletetabledb() {
    const db = new sqlite3.Database('database.db', (err) => {
        if (err) {
            console.log(err);
        } else {
            db.run(`DROP TABLE IF EXISTS users`);
            console.log("Users table deleted.");
        };
    });
};


function insertuser(userRecord) {
    const db = new sqlite3.Database('database.db', (err) => {
        if (err) {
            console.log(err);
        } else {
            db.run(`INSERT INTO users(name, email, phone) VALUES (?, ?, ?)`, userRecord);
            console.log("User record saved.");
        };
    });
}


function readtable() {
    const db = new sqlite3.Database('database.db', (err) => {
        if (err) {
            console.log(err);
        } else {
            db.all(`SELECT * FROM users`, (err, tableData) => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(tableData);
                };
            });
        }
    });
};





module.exports = { createdb, deletetabledb, insertuser, readtable };

