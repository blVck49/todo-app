const http = require("http");
const fs = require('fs');

const app = require('./app');
const port = process.env.PORT;

const server = http.createServer(app);

const https = require('https');

var https_options = {

    key: fs.readFileSync("./api.uatdrive.com.key.txt"),

    cert: fs.readFileSync("./api.uatdrive.com.crt"),

    ca: [

        fs.readFileSync('./addtrustexternalcaroot.crt'),

        fs.readFileSync('./api.uatdrive.com.ca-bundle')

    ]
};

//    http.createServer(https_options, app)
//    .listen(port);
  https.createServer(https_options, app)
   .listen(port);
