const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;


// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files from the "Frontend" directory
app.use(express.static(path.join(__dirname, '../Frontend')));

// Route to serve the index.ejs file
app.get('/', (req, res) => {
    res.render(path.join(__dirname, '../Frontend/VIEWS', 'index'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});