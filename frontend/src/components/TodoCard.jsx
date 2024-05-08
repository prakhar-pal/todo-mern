import React from "react";
import { Card } from "antd";
const TodoCard = ({ title, description, className }) => {
    return (
        <div className={`rounded bg-white px-4 py-2 cursor-pointer ${className}`} role="button">
            <h4>{title} </h4>
            <p className="">
                {description}
            </p>
        </div>
    )
}
export default TodoCard;
