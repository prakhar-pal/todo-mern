import React from "react";
import { Outlet } from "react-router";
import ErrorBoundary from "./ErrorBoundary.jsx";

function Root() {
    return (
        <main className="app px-4 py-2 md:px-0 md:py-0">
               <Outlet />
        </main>
    );
}

export default Root;
