const auth = require('./auth.service');
const responseHelper = require('../../helpers/response');

exports.basicAuth = async(req,res,next) => {
    const authheader = req.headers.authorization;
    
    const credential = new Buffer.from(authheader.split(' ')[1],
    'base64').toString().split(':');
    username = credential[0];
    password = credential[1];
    
    const data = await auth.authCheck(username,password)
    if (data === null) {
        const message = 'Wrong Credentials';
        return responseHelper.fail(res,message);
    }
    if (data === false) {
        const message = 'You need a username and password';
        return responseHelper.fail(res,message);
    }
    if (data === true) {
        next();
    }
};


