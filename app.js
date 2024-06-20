const express = require("express");
const app = express();
require("./configs/todo.config");
const {TodoModel} = require("./model/todo.model");
const userRouter = require("./routers/todo.router")
app.use( express.json());
app.use( express.urlencoded());
app.set("view engine", "ejs");

const favicon = require("serve-favicon");
const path = require("path");
app.use(express.static(__dirname + '/public')); // Serve files from the 'public' directory

app.use(favicon(path.join(__dirname, "public", "todo.png")));

const port = 4000
app.use(userRouter)
app.listen(port,()=>{
    console.log(`server is running on port:${port}`);
});