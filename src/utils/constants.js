
module.exports.status = {
    success: 'success',
    successDeletion: 'successDeletion',
    created: 'created',
    updated: 'updated',
    notFound: 'notFound',
    conflict: 'conflict',
    serverError: 'serverError'
};

module.exports.httpCodes = {
    success: 200,
    successDeletion: 200,
    created: 201,
    updated:200,
    notFound: 404,
    conflict: 409,
    serverError: 500
};


module.exports.statusCodes = {
    success: 8000,
    successDeletion: 9000,
    created: 8001,
    updated:8004,
    notFound: 8404,
    conflict: 8409,
    serverError: 8500
};


module.exports.statusMessages  = {
    success: 'Success',
    successDeletion: 'Task deleted successfully',
    created: 'Task saved successfully',
    updated: 'Task updated successfully',
    notFound: 'Task not found',
    conflict: 'Open task already exist',
    serverError: 'Internal server error'
};