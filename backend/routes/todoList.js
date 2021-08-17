const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const todoListController = require('../controllers/todoList');


router.post('/',bodyParser.json({type:'application/json'}),todoListController.insertElement);
  
router.get('/',todoListController.getAllElement);
  
router.delete('/',bodyParser.json({type:'application/json'}),todoListController.deleteElement);

router.put('/',bodyParser.json({type:'application/json'}),todoListController.changeEtat);

module.exports=router;