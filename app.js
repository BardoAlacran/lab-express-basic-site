const { request } = require('express');
const express = require('express');

const app = express();

app.use(express.static('public'));

const port = 3000;

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/views/home.html')
});

app.get('/about', (request, response) => {
    response.sendFile(__dirname + '/views/about.html')
});

app.get('/works', (request, response) => {
    response.sendFile(__dirname + '/views/works.html')
});

app.listen(port, () => console.log(`http://localhost:${port}`));