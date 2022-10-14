const fetch = (...args) =>
	import('node-fetch').then(({default: fetch}) => fetch(...args));
const { json } = require('express');
const  responseHelper  = require('../../helpers/response');

exports.call = async(req,res) => {
    const api = 'https://api.coinbase.com/v2/currencies';
    await fetch(api,{
        method : 'GET',
        headers : { 'Content-Type': 'application/json' }
    }).then(response => response.json()
      .then(json => {
        const message = 'Success';
        return responseHelper.success(res,json,message)
    })    
    )
};