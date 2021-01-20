const mongoose = require('mongoose');
const Todo = require('../models/todo');

//get all todos
exports.todo_get_all = (async(req, res) => {
    try {
        const todos = await Todo.find()
    return res.status(200).send({
        status_code: 200,
        data: todos
    });

    } catch (error) {
        return res.status(400).send({
            status_code: 400,
            detail: error.message,
            message: "Bad Request",
            request: req.body
            });
        }
})

//get one todo
exports.todo_get = (async(req, res) => {
    try{
        const todo = await Todo.findById(req.params.id);
        return res.status(200).send({
            status_code: 200,
            data: todo,
        })
    } catch(error) {
        return res.status(400).send({
            status_code: 400,
            detail: error.message,
            message: "Bad request",
            request: req.body
        })
    }
})

//create a todo
exports.create_todo = (async(req, res) => {
    const todo = new Todo({
        
        todoDetails: req.body.todoDetails,
        Title: req.body.Title,
    })
    try{
        await todo.save();
        return res.status(200).send({
            status_code: 200,
            data: todo,
        })
    } catch (err){
        return res.status(400).send({
            status_code: 400,
            detail: error.message,
            message: "Bad Request",
            request: req.body
        })
    }
})

//update a todo
exports.update_todo = (async(req, res) => {
    const todo = await Todo.findById(req.params.id);
    for (let key in req.body){
        if(todo[key] != req.body[key]){
            todo[key] = req.body[key]
        }
    }
    try {
        await todo.save()
        return res.status(200).send({
            status_code: 200,
            data: todo,
        })
    } catch (error){
        return res.status(400).send({
            status_code: 400,
            detail: error.message,
            message: "Bad Request",
            request: req.body
        })
    }
})

//delete a todo
exports.delete_todo = (async(req, res) => {
    const todo = await Todo.findById(req.params.id);
    try {
        await todo.remove();
        return res.status(200).send({
            status_code: 200,
            message: "todo deleted successfully",
        })
    } catch(err){
        return res.status(400).send({
            status_code: 400,
            detail: error.message,
            message: "Bad Request",
            request: req.body
        })
    }
})


