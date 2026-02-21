import axios from "axios";

export const api = axios.create({
    baseURL:"http://192.168.2.102:8080" ,
});

export const getImageUrl = (caminho: string) => {
    return `${api.defaults.baseURL}/${caminho}`;
};
