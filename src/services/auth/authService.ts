import { api } from "../axios/api";
import {UsuarioCadastro, UsuarioLogin, Profissional } from "../../types/Usuario";


export async function cadastrarUsuario(data: UsuarioCadastro){
    const response = await api.post("/auth/registrar", data);
    return response.data;

}

export async function login(data:UsuarioLogin){
    const response = await api.post("/auth/entrar", data);
    return response.data;
}

export async function listarProfissionais(){
    const response = await api.get("/profissional/all");
    return response.data;

}
