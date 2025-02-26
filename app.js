const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000; //local testing environment

app.use(express.static(__dirname));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'HTML/index.html'));
});

app.listen(PORT);