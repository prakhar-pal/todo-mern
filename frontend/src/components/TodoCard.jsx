import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import React from "react";
import { TodoStatusOptions } from "../config/constants";
const TodoCard = ({ title, description, status, className, _id, fullDescription = false }) => {
    const navigate = useNavigate("");
    function openTodoDetailsPage() {
        return navigate(`/todo/${_id}`);
    }
    const statusObject = React.useMemo(() => {
        const option = TodoStatusOptions.find(option => option.value === status);
        return option ?? TodoStatusOptions[0];
    }, [status])
    return (
        <div
            className={clsx('rounded px-4 py-2 cursor-pointer relative', className, {
                'h-24': !fullDescription,
                "bg-purple-400": statusObject.value == "TODO",
                "bg-green-600 text-white": statusObject.value == "DONE",
                "bg-green-400 text-black": statusObject.value == "IN_PROGRESS",

            })}
            role="button"
            onClick={openTodoDetailsPage}>
            <h4 className="font-semibold">{title} </h4>
            <div className={clsx("font-light", !fullDescription ? "h-12 overflow-hidden" : "")}>
                {description}
            </div>
            <div className={clsx("absolute right-2 bottom-2 h-4 italic text-xs border rounded border-gray-300 px-3 py-2 flex items-center justify-center", {
                "text-white": statusObject.value == "TODO",
                "text-white": statusObject.value == "DONE",
                "text-black": statusObject.value == "IN_PROGRESS",
            })}>
                {statusObject.label}
            </div>
        </div>
    )
}
export default TodoCard;
