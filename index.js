const { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } = require('constants');
const http = require('http');
const fs = require('fs');

const homePage = fs.readFileSync('index.html');
const overmijPagina = fs.readFileSync('over.html');
const contactPagina = fs.readFileSync('contact.html');
const notFoundPagina = fs.readFileSync('notfound.html');

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        console.log(req.url);
        res.end(homePage);
    } else if (req.url === '/contact') {
        res.end(contactPagina);
    } else if (req.url === '/over') {
        res.end(overmijPagina);
    } else {
        res.writeHead(404);
        res.end(notFoundPagina);
    }



});

server.listen(3001);