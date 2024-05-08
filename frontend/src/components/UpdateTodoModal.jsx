import React from "react";
import { Modal, notification } from "antd";
import todoApiService from "../services/apis/todo.service";
import TodoForm from "./TodoForm";
import { DEFAULT_ERROR_MESSAGE } from "../config/constants";

function UpdateTodoModal({ onClose, ...todo }) {
    async function onSubmit({title, description, _id}) {
        try {
            const response = await todoApiService.updateTodo({title, description, _id});
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
            title="Update todo"
            onCancel={onClose}
        >
            <TodoForm submitText={"Update Todo"} onSubmit={onSubmit} initialTodo={todo}/>
        </Modal>
    );
}

export default UpdateTodoModal;
