const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');
const TodoController = require('../controllers/todo');
const TodoAuth = require('../middleware/check-auth');


//get all todos
router.get('/', TodoAuth.checkAuth, TodoController.todo_get_all)

//get all todos for a day
router.get('/day', TodoAuth.checkAuth, TodoController.todo_get_day)

//get all todos for the week
router.get('/week', TodoAuth.checkAuth, TodoController.todo_get_week)

//get all todos for the month
router.get('/month', TodoAuth.checkAuth, TodoController.todo_get_month)

//create a todo
router.post('/',TodoAuth.checkAuth, TodoController.create_todo)

//update a todo
router.put('/:id', TodoAuth.checkAuth, TodoController.update_todo)

//delete a todo
router.delete('/:id', TodoAuth.checkAuth, TodoController.delete_todo)


module.exports = router;
