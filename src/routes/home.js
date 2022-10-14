const express = require('express');
const responseHelper  = require('../helpers/response');
const auth = require('../modules/basicAuth/auth.controller');

const router = express.Router();

const homePage = (req,res)=> {
    const message = "Welcome to API!";
    return responseHelper.success(res,message);
};

router.get('/',auth.basicAuth,homePage);

module.exports = router;