import React, { useState } from "react";
import { Space, Button } from "antd"
import TodoCard from "./TodoCard";
import AddTodoModal from "./AddTodoModal";
const TodoList = ({ todos }) => {
    const [showAddTodoModal, setShowAddTodoModal] = useState(false);
    return (
    <>
        {showAddTodoModal && <AddTodoModal onClose={() => setShowAddTodoModal(false)}/>}
        <Space direction="horizontal" className="mb-8 mt-4">
            <Button title="Add" type="primary" onClick={() => setShowAddTodoModal(true)}>
                Add
            </Button>
        </Space>
        <div className="flex flex-wrap gap-2">
            {todos.map(todo => <TodoCard key={todo._id} {...todo} className={"md:basis-[calc(50%-8px)] basis-full"}/>)}
        </div>
    </>
    )
}

export default TodoList;
