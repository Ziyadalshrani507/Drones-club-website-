const express = require('express');
const path = require('path');
const fs = require('fs');
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

// Route to serve the join.ejs file
app.get('/joinus', (req, res) => {
    res.render(path.join(__dirname, '../Frontend/VIEWS', 'join'));
});

// Route to serve the events.ejs file
const eventImgDir = path.join(__dirname, '../Frontend/images/eventimages');
app.get('/events', (req, res) => {
    fs.readdir(eventImgDir, (err, files) => {
        if (err) {
            console.log(err);
            return res.status(500).send('Error loading images');
        }
        res.render(path.join(__dirname, '../Frontend/VIEWS', 'events'), { images: files });
    });
});

// Route to serve the photogallery.ejs file
const photoGalleryDir = path.join(__dirname, '../Frontend/images/photogallery');
app.get('/photogallery', (req, res) => {
    fs.readdir(photoGalleryDir, (err, files) => {
        if (err) {
            console.log(err);
            return res.status(500).send('Error loading images');
        }
        res.render(path.join(__dirname, '../Frontend/VIEWS', 'photogallery'), { images: files });
    });
});

// Route to serve the about.ejs file
app.get('/about', (req, res) => {
    res.render(path.join(__dirname, '../Frontend/VIEWS', 'about'));
});

// Route to serve the team.ejs file
app.get('/team', (req, res) => {
    res.render(path.join(__dirname, '../Frontend/VIEWS', 'team'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});