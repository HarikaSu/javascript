const http = require('http');        // Built-in HTTP module
const fs = require('fs');            // File System module
const fetch = require('node-fetch'); // For making HTTP requests

// Fake Store API URL
const apiUrl = 'https://fakestoreapi.com/products';

// Create an HTTP server
const server = http.createServer(async (req, res) => {
    // Check if the requested URL is '/create'
    if (req.url === '/create' && req.method === 'GET') {
        try {
            // Fetch data from the Fake Store API
            const response = await fetch(apiUrl);
            const data = await response.json(); // Parse the response to JSON

            // Convert the data to a pretty-printed JSON string
            const jsonData = JSON.stringify(data, null, 2);

            // Write the fetched data to index.txt
            fs.writeFile('./index.txt', jsonData, (err) => {
                if (err) {
                    // If an error occurs while writing the file
                    res.statusCode = 500;
                    res.setHeader('Content-Type', 'text/plain');
                    res.end('Error writing to file');
                } else {
                    // If the file is successfully written
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/plain');
                    res.end('File created successfully with data from the Fake Store API');
                }
            });

        } catch (error) {
            // Handle any errors that occur during the fetch operation
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Error fetching data from API');
        }
    } else {
        // Handle other routes
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Not Found');
    }
});

// Start the server on port 3000
const port = 3000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
