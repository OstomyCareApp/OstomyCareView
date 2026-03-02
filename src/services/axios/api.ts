import axios from "axios";
import { getToken } from "../token/tokenService";

export const api = axios.create({
    baseURL:"http://192.168.0.101:8080" ,
});

//Usar para passar o token nas rotas e não precisar passar manualmente, sempre que o axios for processado o
//interceptor será chamado
api.interceptors.request.use((config) => {
    const token = getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
    }, (error) => Promise.reject(error)
);

export const getImageUrl = (caminho: string) => {
    return `${api.defaults.baseURL}/uploads/${caminho}`;
};


