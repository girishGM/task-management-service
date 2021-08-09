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


authRouter.get('/logout', function(req, res) {
    result ={
        "statusCode": status.success,
        "obj": {token: null}
    }
    return httpHandler.httpResponse(res, result);
});

module.exports = authRouter;