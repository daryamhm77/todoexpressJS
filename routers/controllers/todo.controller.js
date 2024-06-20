const { TodoModel } = require("../../model/todo.model");

const addTodo = async(req,res)=>{
    try {
        const {content,completed} = req.body;
        const result =await TodoModel.create({
            content,
            completed
        });
        res.send(result);
        res.redirect("/")
    } catch (error) {
        console.log(error);
 }};

const getTodos = async(req,res)=>{
    try {
     const todos = await TodoModel.find();
     res.render("todo",{
         todos
     })
    } catch (error) {
     console.log(error);
    }
 }

const getTodo = async(req,res)=>{
    try {
        const {id} = req.params;
        const todo = await TodoModel.findOne({_id:id});
        res.render("edit todo:",{todo})
    } catch (error) {
      console.log(error);  
    }
}
const editTodo = async(req,res)=>{
    try {
      const {id} = req.params;
      const {content,completed} = req.body;
      const todo = await TodoModel.findOne({_id:id});
      if(!todo) throw {
          statusCode:404,
          message:"not found"
      }
      const result = await TodoModel.updateOne({_id:id},{
          content,
          completed
      })
      res.send(result)
      res.redirect("/")
    } catch (error) {
      console.log(error);
    }
  }

const deleteTodo = async(req,res)=>{
    try {
        const {id} = req.params;
        const result = await TodoModel.findByIdAndDelete({_id:id})
        console.log(id);
        const todos = await TodoModel.find();
        res.send(todos)
        res.redirect("/")
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    addTodo,
    getTodos,
    getTodo,
    editTodo,
    deleteTodo
}