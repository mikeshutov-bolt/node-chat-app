//Need to update this so that the users utils functions uses the model which will be created
class Users {
    constructor (){
        this.users = [];
    }
    addUser(id,name,room){
        var user = {id,name,room};
        this.users.push(user);
        return user;
    }
    removeUser(id){
        var user = this.users.filter((user)=> user.id === id);
        this.users = this.users.filter((user) => user.id !== id);
        return user;
    }
    getUser(id){
        return this.users.filter((user) => user.id === id);
    }
    getUserList(room){
        var users = this.users.filter((user) => user.room === room);
        var namesArray = users.map((user) => user.name);

        return namesArray;
    }
};

module.exports = {
    Users
};
