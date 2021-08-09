var jwt = require('jsonwebtoken'); 
var config = require('../config'); 
const {status} = require('../utils/constants');
const httpHandler = require('../utils/httpHandler');

function verifyToken(req, res, next) {
  let statusCode = null ;
  // check header for token
  var token = req.headers['x-access-token'];
  if (!token){
    statusCode = status.forbidden;
    let result ={
      "statusCode": statusCode,
      "obj": null
    }
    return httpHandler.httpResponse(res, result); 
  }
    // verifies secret and checks exp
  jwt.verify(token, config.secret, function(err, decoded) {      
    if (err){
      statusCode = status.unauthorized; 
      let result ={
        "statusCode": statusCode,
        "obj": null
      }
      return httpHandler.httpResponse(res, result); 
    }
      // if everything is good, save to request for use in other routes
      req.userId = decoded.userId;
      next();
  });
}

module.exports = verifyToken;