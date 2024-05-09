import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import React from "react";
const TodoCard = ({ title, description, className, _id, fullDescription = false }) => {
    const navigate = useNavigate("");
    function openTodoDetailsPage() {
        return navigate(`/todo/${_id}`);
    }
    return (
        <div className={clsx('rounded bg-white px-4 py-2 cursor-pointer', className, {'h-24': !fullDescription})} role="button" onClick={openTodoDetailsPage}>
            <h4 className="font-semibold">{title} </h4>
            <div className={clsx("font-light", !fullDescription ? "h-12 overflow-hidden" : "")}>
                {description}
            </div>
        </div>
    )
}
export default TodoCard;
