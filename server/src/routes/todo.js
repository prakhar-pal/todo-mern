import express from "express";
import { addTodo, getAllTodos, removeTodo, updateTodo, } from "../controllers/todo.controller.js";

const router = express.Router();

router.get("/", getAllTodos);
router.post("/", addTodo);
router.put("/", updateTodo);
router.delete("/", removeTodo);

export default router;
