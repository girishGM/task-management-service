const {status} = require('../utils/constants');



module.exports.getTasks = (req) => {
    return req.app.db.get('tasks').value();
}


module.exports.searchTask = (req, searchParams) => {

    let task = req.app.db.get('tasks').find({ 
        ...searchParams
    }).value();

    return task;
}

module.exports.updateTask = (req, updateParams) => {
    console.log("DB : updatetask : "+ JSON.stringify(updateParams));
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