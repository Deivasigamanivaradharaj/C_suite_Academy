import axios from "axios";

const API = axios.create({ baseURL: "https://c-suite.onrender.com/" });

export const addnewUser = (userdata) => API.post("/api/user", userdata);

export const allUsers = () => API.get("/api/user");

export const updateUser = (userdata,Id) => API.put(`/api/user/${Id}`, userdata);

export const deleteUser = (Id) => API.delete(`/api/user/${Id}`);

export const allPurchases = () => API.get(`/api/payment`);

export const addnewCourse = (course)=>API.post('/api/courseDetail',course)
