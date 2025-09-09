const sqlite3 = require('sqlite3').verbose();

// Connect to the SQLite database. A file called 'database.sqlite' will be created automatically.
const db = new sqlite3.Database('./database.sqlite', (err) => {
    if (err) {
        console.error('Error opening database ' + err.message);
    } else {
        console.log('Connected to the SQLite database.');
        // Create a table for comments if it doesn't exist
        db.run(`CREATE TABLE IF NOT EXISTS comments (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL, 
            message TEXT NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )`, (err) => {
            if (err) {
                console.error("Error creating table:", err);
            } else {
                console.log("Comments table is ready.");
            }
        });
    }
});

module.exports = db;