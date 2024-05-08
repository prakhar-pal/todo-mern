import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Todos, { loader as todosLoader} from "../routes/todos.jsx";
import Root from "./Root.jsx";
import Todo, { loader as todoLoader } from "../routes/todo.jsx";

export default createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                exact: true,
                loader: todosLoader,
                element: <Todos />
            },
            {
                path: "/todo/:id",
                loader: todoLoader,
                element: <Todo />
            }
        ]
    },
]);
