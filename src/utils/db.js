const {status} = require('../utils/constants');



module.exports.getTasks = (req) => {

    let tasks = req.app.db.get('tasks').value();
    if(tasks && tasks.length > 0){
        console.log('Total tasks --- '+ tasks.length);
        tasks = tasks.filter( task => task &&
            task.userId === req.userId)
    }
    return tasks;
}


module.exports.searchTask = (req, searchParams) => {

    let tasks = req.app.db.get('tasks').find({ 
        ...searchParams
    }).value();

    return tasks;
}

module.exports.updateTask = (req, updateParams) => {
    console.log("DB : updateTask : "+ JSON.stringify(updateParams));
    req.app.db.get("tasks").find({
        id:req.params.id
    })
    .assign(updateParams )
    .write();
   
    return status.success;
}


module.exports.deleteTask = (req) => {

    req.app.db.get("tasks").remove({
        id:req.params.id
    })
    .write();

    return status.succes;
}