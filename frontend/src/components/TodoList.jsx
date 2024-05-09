import React from "react";
import TodoCard from "./TodoCard";
const TodoList = ({ todos }) => {
    return (
    <>
        <div className="flex flex-wrap gap-2">
            {todos?.map(todo => <TodoCard key={todo._id} {...todo} className={"md:basis-[calc(50%-8px)] basis-full"}/>)}
        </div>
    </>
    )
}

export default TodoList;
