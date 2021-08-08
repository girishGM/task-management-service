const express = require("express");
const router = express.Router();
const taskService = require('../services/task.service');
const httpHandler = require('../utils/httpHandler');


router.get('/', (req,res) => {
    console.log('Inside getTasks');
    let result = taskService.getTasks(req, true) ;
    return httpHandler.httpResponse(res, result);
});


router.get('/:id', (req,res) => {
    console.log('Inside getTask');
    let result = taskService.getTask(req);
    return httpHandler.httpResponse(res, result);
});


router.post('/', (req,res) => {
    console.log('Inside postTask');
    let result = taskService.postTask(req);
    return httpHandler.httpResponse(res, result);
});

router.put('/:id', (req,res) => {
    console.log('Inside putTask');
    let result = taskService.putTask(req);
    return httpHandler.httpResponse(res, result);
});

router.delete('/:id', (req,res) => {
    console.log('Inside deleteTask');
    let result = taskService.deleteTask(req);
    return httpHandler.httpResponse(res, result);

});

module.exports = router;