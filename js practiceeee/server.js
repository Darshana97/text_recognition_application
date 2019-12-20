// const server = require('http');

// server.createServer((req,res)=>{
//     res.end('server is running');
// }).listen(4000);



// const server = require('http');
// const express = require('express');

// const app = express();

// app.use((req,res,next)=>{
//     res.send('this server is running');
// });

// server.createServer(app).listen(4000);


const server = require('http');
const express = require('express');

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', true);
    res.header('Access-Control-Allow-Credentials', 'Content-Type');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
})

app.get("/api/user", (req, res, next) => {

    const details = [
        {
            id: 1,
            email: 'test1@gmail.com',
            password: 'abc'
        },
        {
            id: 2,
            email: 'test2@gmail.com',
            password: '123'
        }

    ];

    res.json(details);

});

server.createServer(app).listen(4000);