const {Schema,model} = require("mongoose");

const TodoSchema = new Schema({
    
    content:{type:String, required:true,trim: true,
        maxlength: 30,},
    completed:{type:Boolean, default:true}
    
},
{timestamps:true}
)

const TodoModel = model("Todo",TodoSchema);

module.exports = {
    TodoModel
}