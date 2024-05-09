import { TodoStatusEnums } from "./models/todo.js";

class Logger {
    log(str) {
        console.log(str);
    }
}

const logger = new Logger();

function todoStatusValidator(todoStatus) {
    const isValidTodoStatus = TodoStatusEnums.includes(todoStatus);
    if(!isValidTodoStatus) {
        throw new Error("Not valid Status");
    }
    return true;
}

export { logger, todoStatusValidator };
