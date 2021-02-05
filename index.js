const { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } = require('constants');
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

app.listen(3001, () => {
    console.log('app listening on port 3001');
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.get('/over', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'over.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'contact.html'));
});