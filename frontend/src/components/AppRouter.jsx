import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Todos from "../routes/todos.jsx";
import Root from "./Root.jsx";
import Todo, { loader as todoLoader } from "../routes/todo.jsx";
import ErrorBoundary from "./ErrorBoundary.jsx";

export default createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorBoundary />,
        children: [
            {
                path: "/",
                exact: true,
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
