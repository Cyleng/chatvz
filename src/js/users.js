const users = [];


const addUser = (id, username,room)=>{


    //checking  if username is taken
    const existUser = users.find((user)=>{
        return user.username === username;
    })

    if (existUser){
        throw new err("username is taken");
        //console.log("username is taken");
    }

    const user = {id, username, room};
    users.push(user);
    return user;

}

const rmUser = ((id)=>{
    const index = users.findIndex((user)=>user.id === id);
    if(index !== -1){
        return users.splice(index, 1)[0];
    }
})

const getUser = ((id)=>{
    const user = users.find((user)=>user.id === id);
    return user;
})

const getAllUsers=(()=>{
    return users;
})
module.exports = {
    addUser,
    rmUser,
    getUser,
    getAllUsers
}