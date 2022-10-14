const express = require('express');
const getApi = require('../modules/extApi/api.controller');

const router = express.Router();

router.get('/',getApi.call);

module.exports = router;