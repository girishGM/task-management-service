const express = require("express");
const dashboardRouter = express.Router();
const httpHandler = require('../utils/httpHandler');
const {status} = require('../utils/constants');

dashboardRouter.get('/', (req,res) => {

    let tasks = req.app.db.get('tasks').value();
    
    let totalTasks = 0 ;
    let completedTasks = 0 ;
    if( tasks ){
        for (const task of tasks) {
            totalTasks++;
            if(task.completed){
                completedTasks++;
            }
        }
    }

    let dashboardResponse ={
        "totalTasks": totalTasks,
        "completedTasks": completedTasks
    }

    let result = {
        "statusCode": status.success,
        "obj": dashboardResponse
    };
    return httpHandler.httpResponse(res, result);

});


module.exports = dashboardRouter;