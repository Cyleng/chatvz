const socket = io();

const messageForm=document.getElementById('message-form');
const messageInput=document.querySelector('input');
const messageButton=document.querySelector('button');
const messages=document.getElementById('messages')
const {username} = Qs.parse(location.search, { ignoreQueryPrefix: true});
const room = "default room";
//console.log(username)


socket.emit('join',{username,room});

socket.on('message',(message)=>{
    console.log(message);
    const html=`
    <div class="message">
        <p>
            <span class="message_name">${message.username}</span>
            <span class="message_meta">${message.createTime}</span>
        </p>
        <p>${message.text}</p>
    </div>
    `
    messages.insertAdjacentHTML('beforeend',html);
})


messageForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const message=e.target.elements.message.value;
    console.log(message);
    socket.emit('chat', message);
})