import React from "react";
import { Outlet } from "react-router";

function Root() {
    return (
        <main className="app">
               <Outlet />
        </main>
    );
}

export default Root;
