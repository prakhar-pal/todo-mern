import React, { useState} from "react";
import todoApiService from "../services/apis/todo.service";
import { Link, useNavigate } from "react-router-dom";
import { Space, Button, Modal, notification } from "antd";
import { useLoaderData, useRevalidator } from "react-router";
import TodoCard from "../components/TodoCard";
import UpdateTodoModal from "../components/UpdateTodoModal.jsx";

function TodoDetailsPage() {
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

    function handleDeleteTodo() {
        Modal.confirm({
            title: "Are you sure?",
            content: "This can't be reversed",
            footer: (_, { OkBtn, CancelBtn }) => (
                <>
                  <CancelBtn />
                  <OkBtn />
                </>
              ),
            onOk: async function() {
                const response = await todoApiService.deleteTodo(todo._id);
                if(!response.ok) {
                    alert("Couldn't delete");
                }else {
                    return navigate("/");
                }
            }
        });
    }

    return (
        <>
            {showUpdateTodoModal && <UpdateTodoModal {...todo} onClose={onCloseUpdateTodoModal}/>}
            <Link className="flex mt-4" onClick={handleGoBack}>
                <span className="mr-1">&larr;</span>
                <h3>Details</h3>
            </Link>
            <TodoCard 
                {...todo}
                className={"mt-4"}
                fullDescription
            />
            <Space className="mt-4" align="end">
                <Button type="primary" onClick={() => setShowUpdateTodoModal(true)}>Update</Button>
                <Button type="dashed" danger onClick={handleDeleteTodo}>Delete</Button>
            </Space>
        </>
    )
}

export async function loader({ params }) {
    const response = await todoApiService.getTodo(params.id);
    if(!response.ok) {
        throw new Response("Not Found", { status: 404 });
    }else {
        return response;
    }
}

export default TodoDetailsPage;
