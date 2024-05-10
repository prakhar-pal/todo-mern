import React from "react";
import { Button, Card } from "antd";
import TodoCard from "./TodoCard";
import eventBus from "../services/eventBus";
const TodoList = ({ todos }) => {

    function handleAddTodo() {
        eventBus.dispatch('add-todo');
    }

    if(!todos || !todos.length) {
        return (
            <Card title="You haven't added any Todos">
                <div className="text-center">Add Todos to track them here</div>
                <div className="flex items-center justify-center mt-8">
                    <Button type="primary" onClick={handleAddTodo}>
                        Add a Todo
                    </Button>
                </div>
            </Card>
        )
    }
    return (
    <>
        <div className="flex flex-wrap gap-2">
            {todos.map(todo => <TodoCard key={todo._id} {...todo} className={"md:basis-[calc(50%-8px)] basis-full"}/>)}
        </div>
    </>
    );
}

export default TodoList;
