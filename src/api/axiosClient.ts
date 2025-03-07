import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "";
console.log("API_URL", import.meta.env);
const axiosClient = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-type": "application/json"
    }
});

export { axiosClient };