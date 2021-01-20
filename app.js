const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require("morgan");
const path = require('path');
const port = 3000;
const dotenv = require('dotenv')
dotenv.config({path: './config.env'});

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
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))




app.use('/todos', todoRoutes);
app.use('/users', userRoutes);

// Enable CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, X-Access-Token, XKey, Authorization, Observe");
  next();
});

app.listen(port, () => {
    console.log('server has been started')
})

//module.exports = app;
