
const {statusMessages, statusCodes, httpCodes} = require('../utils/constants');

const accessHeaders = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS,POST,GET,PUT,DELETE'
};


module.exports.httpResponse = (res, resultObj) => {
    var apiStatus = { 
        code: statusCodes[resultObj.statusCode],
        message: statusMessages[resultObj.statusCode] 
    };

    var json = JSON.stringify({ 
        result: resultObj.obj, 
        _status: apiStatus
      });

    res.writeHead(httpCodes[resultObj.statusCode],  { ...accessHeaders });

    return res.end(json); 
};