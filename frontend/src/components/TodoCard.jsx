import React from "react";
import { Card } from "antd";
const TodoCard = ({ title, description, className }) => {
    return (
        <div className={`rounded bg-white px-4 py-2 cursor-pointer h-24 ${className}`} role="button">
            <h4 className="font-semibold">{title} </h4>
            <div className="h-12 overflow-hidden font-light">
                {description}
            </div>
        </div>
    )
}
export default TodoCard;
