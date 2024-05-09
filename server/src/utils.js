import { TodoStatusEnums } from "./models/todo.js";

class Logger {
    log(str) {
        console.log(str);
    }
}

const logger = new Logger();

function todoStatusValidator({ allowEmpty = false } = {}) {
    return function (todoStatus) {
        if(allowEmpty && !todoStatus) {
            return true;
        }
        const isValidTodoStatus = TodoStatusEnums.includes(todoStatus);
        if(!isValidTodoStatus) {
            throw new Error("Not valid Status");
        }
        return true;
    }
}

export { logger, todoStatusValidator };
