const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require("morgan");
const port = 3000;
const dotenv = require('dotenv')
dotenv.config({path: './config.env'});
//const env = require("dotenv")
//env.config();


//const Todo = require('./models/todo')
const todoRoutes = require('./routes/todo');
const userRoutes = require('./routes/user');

const DB = process.env.DB_CONN.replace(
  "DB_PASSWORD",
  process.env.DB_PASSWORD
)
mongoose.connect( DB, 
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