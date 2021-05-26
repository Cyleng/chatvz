const express = require('express');
const socketIO = require('socket.io');
const path = require('path');
const http = require('http');

const {sendMessage}=require('./messages');
const {addUser, rmUser, getUser, getAllUsers}=require('./users')

const app = express();

const server = http.createServer(app);
const io = socketIO(server);

const port = process.env.PORT || 3000
const publicPath = path.join(__dirname,'../pub');

app.use(express.static(publicPath));

io.on('connection',(socket)=>{

    

    socket.on('join',({username, room})=>{
        //console.log(username)
        //console.log(username, room);
        const user = addUser(socket.id, username, room);
        //console.log(user);
        socket.join(user.room);
        socket.emit('message', sendMessage('Room Admin','Welcome to ChatVZ'));
        socket.broadcast.to(user.room).emit('message', sendMessage('Room Admin', `${user.username} has joined this room`));
        io.to(user.room).emit('allUsers',{
            room:user.room,
            users: getAllUsers()
        })
    })

    socket.on('chat', msg=>{
        const user = getUser(socket.id);
        io.to(user.room).emit('message', sendMessage(user.username,msg));
    })
    //console.log('user come in');
    socket.on('disconnect',()=>{
        //
        console.log(socket.id)
        const user=rmUser(socket.id);
        console.log(user);
        //console.log(getAllUsers());
        // const user=rmUser(socket.id);
        // console.log(`${user.username} left`)
        // if (user){
        //     io.to(user.room).emit('message', sendMessage('Room Admin',`${user.username} has left.`));
        //     io.to(user.room).emit('allUsers',{
        //         room:user.room,
        //         users: getAllUsers()
        //     })
        // }
    })
})

server.listen(port,()=>{
    console.log(`server up on ${port}`);
})