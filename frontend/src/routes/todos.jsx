import React from "react";
import { getAllTodos } from "../services/apis/todo.service"; 
import { useLoaderData } from "react-router";
import TodoList from "../components/TodoList";

function Todos() {
    const { todosResponse } = useLoaderData();
    console.log("todos", todosResponse);
    if(todosResponse.ok) {
        return <TodoList todos={todosResponse.todos} />;
    }
    return <div>Something went wrong</div>
}

export async function loader() {
    const todosResponse = await getAllTodos();
    return {
        todosResponse
    }
}

export default Todos;
