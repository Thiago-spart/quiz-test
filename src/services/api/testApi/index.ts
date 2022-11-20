import axios from "axios";

export const testApi = axios.create({
	baseURL: process.env.API_URL || "http://localhost:3333/",
});
