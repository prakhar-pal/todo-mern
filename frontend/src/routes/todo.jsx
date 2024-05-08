import React, { useState} from "react";
import todoApiService from "../services/apis/todo.service";
import { Link, useNavigate } from "react-router-dom";
import { Space, Button } from "antd";
import { useLoaderData, useRevalidator } from "react-router";
import TodoCard from "../components/TodoCard";
import UpdateTodoModal from "../components/UpdateTodoModal.jsx";

function EditTodo() {
    const { todo } = useLoaderData();
    const revalidator = useRevalidator();
    const [showUpdateTodoModal, setShowUpdateTodoModal] = useState(false);
    const navigate = useNavigate();
    function handleGoBack(e) {
        e.preventDefault();
        navigate("/");
    }

    function onCloseUpdateTodoModal () {
        setShowUpdateTodoModal(false);
        revalidator.revalidate();
    }
    return (
        <>
            {showUpdateTodoModal && <UpdateTodoModal {...todo} onClose={onCloseUpdateTodoModal}/>}
            <Link className="flex mt-4" onClick={handleGoBack}>
                <span>&larr;</span>
                <h3>Details</h3>
            </Link>
            <TodoCard 
                {...todo}
                className={"mt-4"}
            />
            <Space className="mt-4" align="end">
                <Button type="primary" onClick={() => setShowUpdateTodoModal(true)}>Update</Button>
                <Button type="dashed" danger>Delete</Button>
            </Space>
        </>
    )
}

export function loader({ params }) {
    console.log("params", params)
    const response = todoApiService.getTodo(params.id);
    return response;
}

export default EditTodo;
