import axios from "axios";

const API_URL = "https://todobackend-ygn9.onrender.com/api/tasks"; // need to update this URL after deployment

export const getTasks = () => axios.get(API_URL);
export const addTask = (task) => axios.post(API_URL, task);
export const updateTask = (id, task) => axios.put(`${API_URL}/${id}`, task);
export const deleteTask = (id) => axios.delete(`${API_URL}/${id}`);
