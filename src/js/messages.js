const sendMessage = (username, text)=>{
    return {
        username,
        text,
        createTime: new Date().getTime()
    }
}

module.exports = {
    sendMessage
}