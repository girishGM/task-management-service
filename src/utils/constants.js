
module.exports.status = {
    success: 'success',
    successDeletion: 'successDeletion',
    created: 'created',
    updated: 'updated',
    unauthorized: 'unauthorized',
    forbidden: 'forbidden',
    notFound: 'notFound',
    conflict: 'conflict',
    serverError: 'serverError'
};

module.exports.httpCodes = {
    success: 200,
    successDeletion: 200,
    created: 201,
    updated:200,
    unauthorized:401,
    forbidden:403,
    notFound: 404,
    conflict: 409,
    serverError: 500
};


module.exports.statusCodes = {
    success: 8000,
    successDeletion: 9000,
    created: 8001,
    updated:8004,
    unauthorized:8401,
    forbidden:8403,
    notFound: 8404,
    conflict: 8409,
    serverError: 8500
};


module.exports.statusMessages  = {
    success: 'Success',
    successDeletion: 'Task deleted successfully',
    created: 'Task saved successfully',
    updated: 'Task updated successfully',
    unauthorized: 'Not a valid token',
    forbidden: 'You don’t have access permission',
    notFound: 'Task not found',
    conflict: 'Open task already exist',
    serverError: 'Internal server error',

};