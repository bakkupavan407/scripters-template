const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist/scripters-template/')));

app.get('/test', function (req, res) {
    res.send('Testing working fine');
});

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

app.listen(port, function () {
    console.log("Server now listening on", port);
});