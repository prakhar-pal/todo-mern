import React from "react";
import todoApiService from "../services/apis/todo.service"; 
import { useLoaderData } from "react-router";
import TodoList from "../components/TodoList";

function Todos() {
    const { todos } = useLoaderData();
    return <TodoList todos={todos} />;
}

export async function loader() {
    const response = await todoApiService.getAllTodos();
    if(!response.ok) {
        throw new Response("Something went wrong", { status: response.status });
    }
    return {
        todos: response.todos,
    }
}

export default Todos;
