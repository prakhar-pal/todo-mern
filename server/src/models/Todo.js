import mongoose from "mongoose";
const Schema = mongoose.Schema;

export const TodoStatusEnums = Object.freeze(["TODO", "IN_PROGRESS", "DONE"])

const TodoSchema = new Schema({
    title: {
        required: true,
        type: String,
    },
    description: {
        required: true,
        type: String,
    },
    status: {
        required: true,
        type: String,
        enum: TodoStatusEnums,
        default: TodoStatusEnums[0],
    }
});

const Todo = mongoose.model('todo', TodoSchema);
export default Todo;
