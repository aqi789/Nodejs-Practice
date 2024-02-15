// const calc=require('./calc');

// let result=calc.add(5,6);
// console.log(result);
// console.log('hello');


var http = require("http");   

http  //creating server
  .createServer(function (req, res) {      //callback fn
    res.write("Hello from HTTP module");    
    res.end();
  })
  .listen(`8080`);  //port number
