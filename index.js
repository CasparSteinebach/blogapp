const { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } = require('constants');
const http = require('http');
const fs = require('fs');
const express = require('express');

const homePage = fs.readFileSync('index.html');
const overmijPagina = fs.readFileSync('over.html');
const contactPagina = fs.readFileSync('contact.html');
const notFoundPagina = fs.readFileSync('notfound.html');

const app = express();

app.listen(3000, () => {
    console.log('app listening on port 3000');
})