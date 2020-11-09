const mongoose = require('mongoose');
const Todo = require('../models/todo');

//get all todos
exports.todo_get_all = ('/', async(req, res) => {
    const todos = await Todo.find()
    res.send(todos)
})

//create a todo
exports.create_todo = ('/', async(req, res) => {
    const {text} = req.body;
    const todo = new Todo({
        text
    })
    try{
        await todo.save();
        res.send(todo)
    } catch (err){
        res.status(400).send(err)
    }
})

//update a todo
exports.update_todo = ('/:id', async(req, res) => {
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
exports.delete_todo = ('/:id', async(req, res) => {
    const todo = await Todo.findById(req.params.id);
    try {
        await todo.remove();
        res.send({message: 'Todo has been deleted successfully'})
    } catch(err){
        res.send(400, err)
    }

})


