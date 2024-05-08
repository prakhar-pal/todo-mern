import React from "react";
import { createRoot } from 'react-dom/client';
import "./app.css";
import AppRouter from './components/AppRouter.jsx';
import { RouterProvider } from "react-router";
const app = document.querySelector("#app");
const root = createRoot(app);
root.render(
    <React.StrictMode>
        <RouterProvider router={AppRouter} />
    </React.StrictMode>
);
