const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require("morgan");
const port = 3000;
const env = require("dotenv")
env.config();


//const Todo = require('./models/todo')
const todoRoutes = require('./routes/todo');
const userRoutes = require('./routes/user');

mongoose.connect( 
 'mongodb+srv://temp-user:process.env.DB_PASSWORD@temp-cluster.jiz6a.mongodb.net/process.env.DB_NAME?retryWrites=true&w=majority',
 {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  }
)
.then(() => {
  console.log ('Database Connected');
})

app.use(morgan("dev"));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

// app.set('view engine', 'ejs')

// app.get(':/', (req, res) => {
//     res.render('index')
// })

app.use('/todos', todoRoutes);
app.use('/user', userRoutes);

app.listen(port, () => {
    console.log('server has been started')
})

//module.exports = app;