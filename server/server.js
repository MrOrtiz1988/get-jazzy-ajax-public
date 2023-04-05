const express = require('express');

const app = express();
const PORT = 5000;

app.use(express.static('server/public'));


const artistListArray = require('./modules/artist');

const songListArray = require('./modules/song');


app.get('/artist', (req, res) => {
    res.send(artistListArray);
});

// TODO - Add GET for songs

app.get('/song', (req, res) => {
    res.send(songListArray);
});

app.listen(PORT, () => {
    console.log('listening on port', PORT)
});