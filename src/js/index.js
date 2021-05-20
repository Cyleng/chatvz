const express = require('express');
const socketIO = require('socket.io');
const path = require('path');
const http = require('http');
const app = express();

const server = http.createServer(app);
const IO = socketIO(server);

const port = process.env.PORT || 3000
const publicPath = path.join(__dirname,'../pub');

app.use(express.static(publicPath));



server.listen(port,()=>{
    console.log(`server up on ${port}`);
})