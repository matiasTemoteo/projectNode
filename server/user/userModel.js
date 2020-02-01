let userList = {list: ['Matias','Heitor','Pedro']};

const getAllUsers = function() {
    return userList;
}

const getUserByName = function(userName) {
    for(i in userList.list) {
        if (userList.list[i] == userName) {
            return 'User Exists!';
        }
    }
    return 'User Not Exists!';
}

const addUser = function(userName) {
    userList.list.push(userName);
    return true;
}

module.exports = {
    getAllUsers,
    getUserByName,
    addUser
}