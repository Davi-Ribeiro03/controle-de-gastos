import axios from "axios";
import { environment } from "../config/environment";
import AsyncStorage from "@react-native-async-storage/async-storage";

const api = axios.create({
  baseURL: environment.API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.request.use(
  (config: any) => {
    const token = AsyncStorage.getItem("@token");

    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }

    return config;
  },
  (error: any) => {
    console.error("Erro na requisição:", error);
    return Promise.reject(error);
  },
);

export default api;
