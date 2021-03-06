const getDashboard = require('./get-dashboard');
const getTasks = require('./get-tasks');
const getTask = require('./get-task');
const postTask = require('./post-task');
const putTask = require('./put-task');
const deleteTask = require('./delete-task');
const login = require('./login');


module.exports = {
    paths:{
        '/tasks':{
            ...getTasks,
            ...postTask
        },
        '/tasks/{id}':{
            ...getTask,
            ...putTask,
            ...deleteTask
        },
        '/dashboard':{
            ...getDashboard
        },
        '/auth/login':{
            ...login
        }
    }
}