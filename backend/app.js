const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");
const todoListRoutes = require ('./routes/todoList');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
   next();
 });

app.use('/api/todoList',todoListRoutes);

app.use(express.static("../html/"));
app.all('/',(req,res)=>{
  res.status(200).sendFile(path.resolve('../html/index.html'));
});

module.exports=app;
