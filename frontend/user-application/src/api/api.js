import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3001/api",
    headers: {
        "Content-Type": "application/json"
    },
});

export default api;

export const deleteUser = (id) => {
    api.delete(`/users/${id}`);
}
