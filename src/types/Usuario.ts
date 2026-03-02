export interface UsuarioCadastro {
    nome: string;
    email: string;
    telefone: string;
    senha: string;
    tipoUsuario: "PACIENTE" | "PROFISSIONAL";
    numeroCoren?: string;
    exercicioProfissional?: string;
}

export interface UsuarioLogin{
    email:string;
    senha:string;
}

export interface UsuarioLogado {
    nome: string;
    email: string;
    telefone: string;
    tipoUsuario: "PACIENTE" | "PROFISSIONAL";
    numeroCoren?: string;
    exercicioProfissional?: string;
    token:string;
}