import axios from "axios";
import { SERVER_URL } from "../../config/server";

async function getAllTodos() {
    const response = await axios.get(`${SERVER_URL}/todo`);
    return response.data;
}

async function addTodo({title, description}) {
    const response = await axios.post(`${SERVER_URL}/todo`, {title, description});
    return response.data;
}

export default {
    addTodo,
    getAllTodos
}
