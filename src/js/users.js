const users = [];


const addUser = ({id, username})=>{


    //checking  if username is taken
    const existUser = users.find((user)=>{
        return user.username === username;
    })

    if (existUser){
        throw new err("username is taken");
        //console.log("username is taken");
    }

    const user = {id, username};
    users.push(user);
    return user;

}

const rmUser = ((id)=>{
    const index = users.findIndex((user)=>user.id ===id);
    if(index){
        return users.splice(index, 1);
    }
})

const getUser = ((id)=>{
    const user = users.find((user)=>user.id===id);
    return user;
})


module.exports = {
    addUser,
    rmUser,
    getUser
}