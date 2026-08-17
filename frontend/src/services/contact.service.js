import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000/api/v1",
});

export const submitContact = async (data) => {
    const response = await API.post("/contact", data);
    return response.data;
};