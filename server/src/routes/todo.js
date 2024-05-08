import express from "express";
import asyncHandler from "express-async-handler";
import { addTodo, getAllTodos, removeTodo, updateTodo, } from "../controllers/todo.controller.js";

const router = express.Router();

router.get("/", asyncHandler(getAllTodos));
router.post("/", asyncHandler(addTodo));
router.put("/", asyncHandler(updateTodo));
router.delete("/", asyncHandler(removeTodo));

export default router;
