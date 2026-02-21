import {api} from "../axios/api"

export const uploadImagem = async (imageUri: string) => {
    const formData = new FormData();

    formData.append("file", {
        uri: imageUri,
        name: "image.jpg",
        type: "image/jpeg",
    } as any);

    const response = await api.post("/imagem/upload", formData, {
        headers: {
        "Content-Type": "multipart/form-data",
        },
    });
    console.log("Sucessoo")
    return response.data;
};

export const listarImagens = async () => {
    const response = await api.get("/imagem");
    return response.data;
};