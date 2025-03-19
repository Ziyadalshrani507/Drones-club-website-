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


app.get('/joinus', (req, res) => {
  res.render(path.join(__dirname, '../Frontend/VIEWS', 'join'));
});


app.get('/eventform', (req, res) => {
  res.render(path.join(__dirname, '../Frontend/VIEWS', 'eventform'));
});


// Route to serve the index.ejs file
const eventImgDir = "Frontend/images/eventimages";
app.get('/events', (req, res) => {
    fs.readdir(eventImgDir, (err, files) => {
      if (err) {
        console.log(err);
        console.log(files)
        return res.status(500).send('Error loading images');
      }
      res.render(path.join(__dirname, '../Frontend/VIEWS', 'events'), { images: files }); 
    });
  });



const imgGalleryDir = "Frontend/images/photogallery";
app.get('/photogallery', (req, res) => {
    fs.readdir(imgGalleryDir, (err, files) => {
      if (err) {
        console.log(err);
        console.log(files)
        return res.status(500).send('Error loading images');
      }
      res.render(path.join(__dirname, '../Frontend/VIEWS', 'photogallery'), { images: files }); 
    });
  });

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});