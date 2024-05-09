import React from "react";
import { Modal, notification } from "antd";
import todoApiService from "../services/apis/todo.service";
import TodoForm from "./TodoForm";
import { DEFAULT_ERROR_MESSAGE } from "../config/constants";

function AddTodoModal({ onClose }) {
    async function onSubmit({title, description}) {
        try {
            const response = await todoApiService.addTodo({title, description});
            if(response.ok) {
                onClose();
            } else {
                const message = response.message ?? DEFAULT_ERROR_MESSAGE;
                notification.error(message);
            }
        } catch {
            notification.error(DEFAULT_ERROR_MESSAGE);
        }
    }
    return (
        <Modal
            open
            footer={null}
            title="Add todo"
            onCancel={onClose}
        >
            <TodoForm submitText={"Add Todo"} onSubmit={onSubmit} />
        </Modal>
    );
}

export default AddTodoModal;
