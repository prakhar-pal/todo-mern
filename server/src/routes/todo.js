import express from "express";
import asyncHandler from "express-async-handler";
import { body } from "express-validator";
import { addTodo, getAllTodos, getTodo, removeTodo, updateTodo, } from "../controllers/todo.controller.js";
import { todoStatusValidator } from "../utils.js";

const router = express.Router();

router.get("/", asyncHandler(getAllTodos));
router.get("/:id", asyncHandler(getTodo));
router.post("/",
   body('title').escape().trim().isString().notEmpty(),
   body('description').escape().trim().isString().notEmpty(),
   body('status').escape().trim().isString().notEmpty().custom(todoStatusValidator),
   asyncHandler(addTodo)
);
router.put("/",
    body('title').escape().trim().isString().notEmpty(),
    body('description').escape().trim().isString().notEmpty(),
    body('status').escape().trim().isString().notEmpty().custom(todoStatusValidator),
    asyncHandler(updateTodo)
);
router.delete("/:id", asyncHandler(removeTodo));

export default router;
