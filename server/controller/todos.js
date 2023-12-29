
const mongoose = require('mongoose')
const Todo = require('../models/Todos.js')
//import Todo from '..Todos.js';


module.exports.readTodos = async (req,res) => {
    try{
        const todos = await Todo.find();
        res.status(200).json(todos)
    }catch (error){
        res.status(404).json({error:error.message})
    }
}



module.exports.createTodos = async (req,res) => {
    //This data is from entry from form in client side 
    const todo = new Todo(req.body);
    try{  
        await todo.save();
        res.status(201).json(todo)
    }catch (error){
        res.status(409).json({error:error.message})
    }
}

module.exports.deleteTodo = async (req,res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send(`The id ${id} is not vaild`)
    }

   await Todo.findByIdAndDelete(id)
   res.json({message : 'Todo deleted successfully'});
}
