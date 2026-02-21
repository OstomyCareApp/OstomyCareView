export type Artigo = {
    id:number;
    titulo: string;
    descricao: string;
    conteudo: string;
    imagem: {
        id: number;
        caminho:string;
    };
};

export type CriarArtigo= {
    titulo: string;
    descricao: string;
    conteudo: string;
    imagem: {
        id: number;
    };
}
export type StackParamList = {
    Inicial: undefined;
    Principal: undefined; 
    ArtigoCompleto: {
        artigo:Artigo;
    }

};

export type TabParamList = {
    Inicio: undefined;
    Diario: undefined;
    Profissionais: undefined;
    Artigos: undefined;
    Perfil: undefined;
};

