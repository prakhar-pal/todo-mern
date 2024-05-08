import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Todos, { loader as todoLoader} from "../routes/todos.jsx";

export default createBrowserRouter([
    {
        path: "/",
        exact: true,
        loader: todoLoader,
        element: (
            <main className="app">
                <Todos />
            </main>
        )
    },
]);
