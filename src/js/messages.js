const sendMessage = (username, text)=>{
    const time=new Date();

    return {
        username,
        text,
        createTime: time.toLocaleTimeString("en-CA",{hour12:false})
    }
}

module.exports = {
    sendMessage
}