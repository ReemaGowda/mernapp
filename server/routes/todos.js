const { Router } = require("express");
const { createTodos,readTodos, deleteTodo }  = require('../controller/todos.js');


const router= Router();

router.get('/', readTodos);
router.post('/',createTodos);
router.delete('/:id',deleteTodo)


module.exports = router;


