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

export const updateUser = (id, formData) => {
    return api.put(`/users/${id}`, formData);
}

export const getUser = (id) => {
    return api.get(`/users/${id}`);
}