
module.exports.status = {
    success: 'success',
    successDeletion: 'successDeletion',
    created: 'created',
    updated: 'updated',
    badRequest: 'badRequest',
    unauthorized: 'unauthorized',
    forbidden: 'forbidden',
    notFound: 'notFound',
    conflict: 'conflict',
    serverError: 'serverError',
    userIdLengthError: 'userIdLengthError',
};

module.exports.httpCodes = {
    success: 200,
    successDeletion: 200,
    created: 201,
    updated:200,
    badRequest: 400,
    unauthorized:401,
    forbidden:403,
    notFound: 404,
    conflict: 409,
    serverError: 500,
    userIdLengthError: 400,
};


module.exports.statusCodes = {
    success: 8000,
    successDeletion: 9000,
    created: 8001,
    updated:8004,
    badRequest: 8400,
    unauthorized:8401,
    forbidden:8403,
    notFound: 8404,
    conflict: 8409,
    serverError: 8500,
    userIdLengthError: 9401
};


module.exports.statusMessages  = {
    success: 'Success',
    successDeletion: 'Task deleted successfully',
    created: 'Task saved successfully',
    updated: 'Task updated successfully',
    badRequest: 'Invalid request parameters',
    unauthorized: 'Not a valid token',
    forbidden: 'You don’t have access permission',
    notFound: 'Task not found',
    conflict: 'Open task already exist',
    serverError: 'Internal server error',
    userIdLengthError: 'Invalid user id, should be less than 10 character',
};