const {Router} = require("express");
const { addTodo, getTodos, getTodo, editTodo, deleteTodo } = require("./controllers/todo.controller");
const router = Router();

router.post("/",addTodo)
//get all toods
router.get("/",getTodos)
router.get("/:id",deleteTodo)
// get method to render the edit task
router.get("/edit-todo/:id",getTodo)
//update task
router.post("/edit-todo/:id",editTodo)

module.exports = router;