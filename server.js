const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors'); // Import the cors middleware

const app = express();
const port = 3000; // Use port 3000 for the server

// Allow requests from all origins
app.use(cors());

// Serve static files from the public directory
// app.use(express.static(path.join(__dirname, 'public')));

// Define route to serve budget data
app.get('/api/budget', (req, res) => {
    // Read the budget_data.json file
    fs.readFile('budget_data.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading budget_data.json:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        // Parse JSON data and send as response
        const budgetData = JSON.parse(data);

        // Log the budget data
        console.log('Budget Data:', budgetData);

        res.json(budgetData);
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
