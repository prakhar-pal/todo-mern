import axios from "axios";
import { SERVER_URL } from "../../config/server";

async function getAllTodos() {
    const response = await axios.get(`${SERVER_URL}/todo`);
    return response.data;
}

async function addTodo(data) {
    const response = await axios.post(`${SERVER_URL}/todo`, data);
    return response.data;
}

async function getTodo(_id) {
    const response = await axios.get(`${SERVER_URL}/todo/${_id}`);
    return {
        ...response.data,
        status: response.status,
    };
}


async function updateTodo(todo) {
    const response = await axios.put(`${SERVER_URL}/todo/`, todo);
    return response.data;
}

async function deleteTodo(_id) {
    const response = await axios.delete(`${SERVER_URL}/todo/${_id}`);
    return response.data;
}

export default {
    addTodo,
    getTodo,
    getAllTodos,
    updateTodo,
    deleteTodo,
}
