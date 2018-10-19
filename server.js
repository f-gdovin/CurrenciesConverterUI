const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
require('dotenv').config();

const port = process.env.PORT || 3000;

const app = express();

app.use(favicon(__dirname + '/build/favicon.ico'));
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', (req, res) => res.send('pong'));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'build', 'index.html')));

app.listen(port, () => {
    console.log(`TransVoca UI production build served at ${port}`)
});