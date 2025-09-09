const express = require('express');
const db = require('./database.js'); // Import the database connection

const app = express();
const port = 3000;

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files (HTML, CSS) from the 'public' folder

// API ROUTE: Get all comments from the database
app.get('/api/comments', (req, res) => {
    const sql = "SELECT * FROM comments ORDER BY created_at DESC";
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ comments: rows });
    });
});

// API ROUTE: Add a new comment to the database
app.post('/api/comments', (req, res) => {
    const { name, message } = req.body;
    // Basic validation
    if (!name || !message) {
        return res.status(400).json({ error: "Name and message are required" });
    }
    const sql = 'INSERT INTO comments (name, message) VALUES (?, ?)';
    db.run(sql, [name, message], function(err) {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(201).json({ 
            message: "Comment added successfully!", 
            id: this.lastID 
        });
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});