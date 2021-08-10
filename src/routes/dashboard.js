const express = require("express");
const dashboardRouter = express.Router();
const httpHandler = require('../utils/httpHandler');
const {status} = require('../utils/constants');
const tokenService = require('../services/token.service');
const db = require('../utils/db');

dashboardRouter.get('/', tokenService, (req,res) => {
    console.log('Inside getDashboard');
    let tasks = db.getTasks(req);
    let totalTasks = 0 ;
    let completedTasks = 0 ;
    if( tasks ){
        for (const task of tasks) {
            if(task){
                totalTasks++;
                if(task.completed){
                    completedTasks++;
                }
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