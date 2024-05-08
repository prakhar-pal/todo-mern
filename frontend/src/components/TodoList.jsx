import React from "react";
import { Space, Button } from "antd"
import TodoCard from "./TodoCard";
const TodoList = ({ todos }) => {
    return (
    <>
        <Space direction="horizontal" className="mb-8 mt-4">
            <Button title="Add" type="primary">
                Add
            </Button>
        </Space>
        <div class="flex flex-wrap gap-1">
            {todos.map(todo => <TodoCard key={todo._id} title={todo.title} description={todo.description} className={"md:basis-[calc(50%-4px)]"}/>)}
        </div>
    </>
    )
}

export default TodoList;
