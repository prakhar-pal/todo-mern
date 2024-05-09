import { ObjectId as MongoObjectId } from "mongodb";
import { validationResult } from "express-validator";
import Todo from "../models/todo.js";

export async function getAllTodos(req, res) {
    try {
        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.status(400).json({
                ok: false,
                errors: result.array()
            });
        }
        const filters = {};
        if(req.query.status) {
            filters.status = req.query.status;
        }
        const todos = await Todo.find(filters);
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

export async function getTodo(req, res, next) {
    try {
        const _id = new MongoObjectId(req.params.id);
        const todo = await Todo.findOne({_id});
        if(todo) {
            return res.json({
                ok: true,
                todo
            });
        } else {
            return res.status(404).json({
                ok: false
            });
        }
    } catch {
        return res.json({
            ok: false,
        })
    }
}


export async function addTodo(req, res)  {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: result.array()
        });
    }
    const { title, description, status } = req.body;
    console.log("addTodo", title, description);
    try {
        const newTodo = new Todo({
            title,
            description,
            status
        });
        await newTodo.save();
        return res.json({
            ok: true,
            todo: newTodo
        });
    } catch (err) {
        return res.json({
            ok: false,
            error: err
        });
    }
}

export async function removeTodo(req, res) {
    const { id: stringId } = req.params;
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

export async function updateTodo(req, res) {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: result.array()
        });
    }
    const { _id: stringId, title, description, status } = req.body;
    try {
        const _id = new MongoObjectId(stringId);
        const todo = await Todo.findOne({ _id });
        if(!todo) {
            return res.status(404).json({
                ok: false,
                message: "Not Found",
            })
        }
        await todo.updateOne({ title, description, status });
        return res.json({
            ok: true,
        })
    } catch (err) {
        return res.status(400).json({
            ok: false,
            message: "UKWN"
        })
    }
}


