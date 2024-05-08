import { SERVER_URL } from "../../config/server";

export async function getAllTodos() {
    const todosResponse = await fetch(`${SERVER_URL}/todo`);
    if(todosResponse.ok) {
        return await todosResponse.json();
    }else {
        return {
            ok: false
        }
    }
}
