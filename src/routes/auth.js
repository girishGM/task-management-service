var express = require('express');
var authRouter = express.Router();
var bodyParser = require('body-parser');

const {status} = require('../utils/constants');
authRouter.use(bodyParser.urlencoded({ extended: false }));
authRouter.use(bodyParser.json());
const httpHandler = require('../utils/httpHandler');

var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var bcrypt = require('bcryptjs');
var config = require('../config'); // get config file


authRouter.post('/login', (req,res) => {
    console.log('Inside postTask');
    let statusCode = '';


    if(req.body.userId && req.body.userName ){

        if(req.body.userId.length > 10){
            result ={
                "statusCode": status.userIdLengthError,
                "obj": null
            }
            return httpHandler.httpResponse(res, result);
        }

    }else{
        result ={
            "statusCode": status.badRequest,
            "obj": null
        }
        return httpHandler.httpResponse(res, result);
    }

    var token = jwt.sign({ userId: req.body.userId, userName: req.body.userName }, config.secret, {
        expiresIn: 86400 // expires in 24 hours
      });
    statusCode = status.success;
    let tokenObj = {
        "token":token
    };  
    result ={
        "statusCode": statusCode,
        "obj": tokenObj
    }
    return httpHandler.httpResponse(res, result);
});

module.exports = authRouter;