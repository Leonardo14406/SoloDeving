const express = require('express');
const dotenv = require('dotenv')
const app = express();
dotenv.config();

console.log("Hello World");

const absolutePath = __dirname + `/views/index.html`;

// Serve static files
app.use("/public", express.static(__dirname + "/public"));
//Serve html file
app.get('/', function(req, res) {
    res.sendFile(absolutePath);
})
//serve json
app.get('/json', function(req, res) {
   if (process.env.MESSAGE_STYLE  === "uppercase") {
        res.json({ "message": "Hello json".toUpperCase() });
   } else {
    res.json({ "message": "Hello json" });
   }
  })
  module.exports = app;
 




































 module.exports = app;
