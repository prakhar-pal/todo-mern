import mongoose from "mongoose";
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    title: {
        required: true,
        type: String,
    },
    description: {
        required: true,
        type: String,
    },
});

const Todo = mongoose.model('todo', TodoSchema);
export default Todo;
