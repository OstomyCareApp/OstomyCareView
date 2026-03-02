import React, { createContext, useState, ReactNode, useContext,} from "react";
import { UsuarioLogado } from "../types/Usuario";
import { setToken, clearToken } from "../services/token/tokenService";

interface AuthContextData {
    autenticado: boolean;
    usuario: UsuarioLogado | null;
    signIn: (usuario: UsuarioLogado) => void;
    signOut: () => void;
}

interface AuthProviderProps {
    children: ReactNode;
}

const AuthContext = createContext<AuthContextData | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [usuario, setUser] = useState<UsuarioLogado | null>(null);
    const [autenticado, setAutenticado] = useState(false);

    function signIn(usuario: UsuarioLogado) {
        setUser(usuario);
        setAutenticado(true);
        setToken(usuario.token);
    }

    function signOut() {
        setUser(null);
        setAutenticado(false);
        clearToken();
    }

    return (
        <AuthContext.Provider
        value={{
            autenticado,
            usuario,
            signIn,
            signOut,
        }}
        >
        {children}
        </AuthContext.Provider>
    );
    };

export function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth deve ser usado dentro de um AuthProvider");
    }

    return context;
}