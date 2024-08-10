import axios from "axios";

// const API = axios.create({ baseURL: "https://csuite-production.up.railway.app" });
const API = axios.create({ baseURL: "https://csuite-production.up.railway.app" });

// user
// export const check = (userdata) => API.post("/api/user");

export const check = (userdata) => API.post("/api/user/check", userdata);

export const fetchela = () => API.get("/api/user/fetchela");

