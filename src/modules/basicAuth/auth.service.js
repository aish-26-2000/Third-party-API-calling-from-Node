require('dotenv').config();

exports.authCheck = (username,password) => {
    if (!username || !password) {
        return false;
    } 
    if (username === process.env.USER_AUTH && password === process.env.PASSWORD){
        return true;
    } else {
        return null;
    }
};


