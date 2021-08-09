
const date = require('../utils/date');
const {nanoid} = require('nanoid');
const db = require('../utils/db');
const {status} = require('../utils/constants');

const idLength = 8;

module.exports.getTasks = (req, sorted = false) => {
    let searchParams = {
        userId: req.userId
    };
    console.log(JSON.stringify(searchParams));
    let tasks = db.getTasks(req);

    if(tasks && tasks.length > 0){            
        tasks = date.sortArray(tasks, sorted);
    }else{
        tasks = [];
    }

    let result ={
        "statusCode": status.success,
        "obj": tasks
    }
    return result;
}


module.exports.getTask = (req) => {

    let result ={};
    let statusCode ;
    let searchParams = {
        id: req.params.id,
        userId: req.userId
    };

    let task = db.searchTask(req, searchParams);

    if(!task){
        statusCode = status.notFound;
    }else{
        statusCode = status.success;
    }

    result ={
        "statusCode": statusCode,
        "obj": task || null
    }
     
    return result;
}



module.exports.postTask = (req) => {

    let result ={};
    let statusCode ;
    let searchParams = {
        title: req.body.title,
        userId: req.userId,
        completed: false
    };
    let task =  db.searchTask(req, searchParams);
        
    console.log( 'task from DB :: '+ JSON.stringify(task) );

    let newTask = null ;

    if(!task){
        newTask = {
            id:nanoid(idLength),
            userId: req.userId,
            createdTime: new Date(),
            completed:req.body.completed || false,
            ...req.body
        };

        console.log( 'new task object :: '+ JSON.stringify(newTask) );

        try {
            req.app.db.get("tasks").push(newTask).write();
            statusCode = status.created;
        }catch(error){
            statusCode = status.serverError;
        }
    }else{
        statusCode = status.conflict;
    }

    result ={
        "statusCode": statusCode,
        "obj": newTask
    }

    return result ;
}



module.exports.putTask = (req) => {

    let result ={};
    let statusCode ;
    let searchParams = {
        id: req.params.id,
        userId: req.userId
    };

    let task =  db.searchTask(req, searchParams);

    if(!task){
        statusCode = status.notFound;
    };
    
    console.log( `Inside putTask - for task id - ${req.params.id} - task from DB - ${JSON.stringify(task)}` );

   //update that task.
   if(task){
        try {
            let updatedTitle = task.title ;
            let updatedStatus = task.completed ;
            if(typeof req.body.title != 'undefined'){
                updatedTitle = req.body.title;
            }
            if(typeof req.body.completed != 'undefined'){
                updatedStatus = req.body.completed ;
            }
            
            console.log( 'updatedTitle :: '+ updatedTitle +' :: updatedStatus :: '+updatedStatus );

            let updateParams = {
                completed: updatedStatus,
                title: updatedTitle
            }
            db.updateTask(req, updateParams);
            statusCode = status.updated;
        } catch(error) {
                statusCode = status.serverError;
        };
    }

    result ={
        "statusCode": statusCode,
        "obj": null
    }

    return result ;
}



module.exports.deleteTask = (req) => {

    let result ={};
    let statusCode ;
    let searchParams = {
        id: req.params.id,
        userId: req.userId
    };

    let task =  db.searchTask(req, searchParams);
    if(!task){
        statusCode = status.notFound;
    };
    console.log( `Inside deleteTask - for task id - ${req.params.id} - task from DB - ${JSON.stringify(task)}` );
   //update that task.
   if(task){
        try {
            db.deleteTask(req);
            statusCode = status.successDeletion;
        } catch(error) {
            statusCode = status.serverError;
        }
    }
    result ={
        "statusCode": statusCode,
        "obj": null
    }
    return result ;
}
