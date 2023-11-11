import axios, { AxiosInstance } from "axios";

const API_URL = process.env.REACT_APP_API_URL

const instance: AxiosInstance = axios.create({
    baseURL: API_URL,
});

export default instance;