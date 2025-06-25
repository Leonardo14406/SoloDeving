require('dotenv').config();
let express = require('express');
let app = express();

console.log("Hello World");

const absolutePath = __dirname + `/views/index.html`;

// Serve static files
app.use("/public", express.static(__dirname + "/public"));
//Serve html file
app.get('/', (req, res) => {
    res.sendFile(absolutePath);
})
let message = "Hello json";
//serve json file
app.get('/json', (req, res) => {
   if (process.env.MESSAGE_STYLE === "uppercase") {
        res.json({"message": "HELLO JSON"});
   } 
    res.json({"message": message});
  });
  module.exports = app;
 




































 module.exports = app;
