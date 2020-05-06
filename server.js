const http = require('http');
const express = require('express');
const path = require('path');
//const router = require('./routes/router');
//const app = express();

// Getting our POSTS routes
const posts = require('./server/routes/posts');
const todos = require('./server/routes/todos');

const hostname = 'localhost';
const port = process.env.PORT || 3000;

// To enable localhost Cross domain Origin calls between angular and nodeJs
const cors = require('cors');

//const server = http.createServer((req, res) => {
  //res.statusCode = 200;
  //res.setHeader('Content-Type', 'text/plain');
  //res.end('Hello World');
//});

const server = express();

// Use midlleware
server.use(cors());
server.use(express.static(path.join(__dirname, 'dist/angular-posts')));
server.use('/posts', posts);
server.use('/todos', todos);

// Catch all OTHER routes requests which are not defined above ('/posts') and return it to this index.html
server.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, './dist/angular-posts/index.html'))
});


server.listen(port, hostname, ()=> {
    console.log(`Node server is running at http://${hostname}:${port}/`);
});