import expres from "express";
import todo from "./todo.js";

const router = expres.Router();

router.use('/todo', todo);

export default router;
