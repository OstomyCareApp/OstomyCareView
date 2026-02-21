import { api } from "../axios/api";
import { CriarArtigo}  from "../../routes/types/index"
export async function criarArtigo(artigo: CriarArtigo) {
    const response = await api.post("/artigo/cadastrar", artigo);
    return response.data;
}
export async function listarArtigos() {
    const response = await api.get("/artigo/listar");
    return response.data;
}
