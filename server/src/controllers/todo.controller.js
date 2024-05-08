import { ObjectId as MongoObjectId } from "mongodb";
import Todo from "../models/todo.js";

export async function getAllTodos(req, res, next) {
    try {
        const todos = await Todo.find();
        return res.json({
            ok: true,
            todos
        });
    } catch {
        return res.json({
            ok: false,
        })
    }
}

export async function addTodo(req, res, next)  {
    const { title, description } = req.body;
    console.log("addTodo", title, description);
    try {
        const newTodo = new Todo({
            title,
            description
        });
        await newTodo.save();
        return res.json({
            ok: true,
            todo: newTodo
        });
    } catch (err) {
        return res.json({
            ok: false,
        });
    }
}

export async function removeTodo(req, res, next) {
    const { _id: stringId } = req.body;
    try {
        const _id = new MongoObjectId(stringId);
        const todo = await Todo.findOne({ _id });
        if(!todo) {
            return res.status(404).json({
                ok: false,
                message: "Not Found",
            })
        }
        await Todo.deleteOne({ _id });
        return res.json({
            ok: true,
        })
    } catch {
        return res.json({
            ok: false,
            message: "UKWN"
        })
    }
}

export async function updateTodo(req, res, next) {
    const { _id: stringId, title, description } = req.body;
    try {
        const _id = new MongoObjectId(stringId);
        const todo = await Todo.findOne({ _id });
        if(!todo) {
            return res.status(404).json({
                ok: false,
                message: "Not Found",
            })
        }
        await Todo.updateOne({ _id, title, description });
        return res.json({
            ok: true,
        })
    } catch {
        return res.json({
            ok: false,
            message: "UKWN"
        })
    }
}
