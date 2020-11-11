const mongoose = require('mongoose');
const Todo = require('../models/todo');

//get all todos
exports.todo_get_all = (async(req, res) => {
    const todos = await Todo.find()
    res.send(todos)
})

//get all todos for the day
exports.todo_get_day = (async(req, res) => {
    const query = {time: 'day'}
   const todos = await Todo.find(query)
   res.send(todos)
})

//get all todos for the week
exports.todo_get_week = (async(req, res) => {
    const query = {time: 'week'}
   const todos = await Todo.find(query)
   res.send(todos)
})

//get all todos for the month
exports.todo_get_month = (async(req, res) => {
    const query = {time: 'month'}
   const todos = await Todo.find(query)
   res.send(todos)
})

//create a todo
exports.create_todo = (async(req, res) => {
    const todo = new Todo({
        text: req.body.text,
        time: req.body.time,
        isCompleted: req.body.isCompleted
    })
    try{
        await todo.save();
        res.send(todo)
    } catch (err){
        res.status(400).send(err)
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
        res.send(todo)
    } catch (err){
        res.send(400, err)
    }
})

//delete a todo
exports.delete_todo = (async(req, res) => {
    const todo = await Todo.findById(req.params.id);
    try {
        await todo.remove();
        res.send({message: 'Todo has been deleted successfully'})
    } catch(err){
        res.send(400, err)
    }

})


