import { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import Cabecalho from "../../Componentes/Cabeçalho";
import TextoApresentacao from "../../Componentes/TextoApresentação";
import CardProfissional from "../../Componentes/CardProfissional";
import { listarProfissionais } from "../../services/auth/authService";
import { Profissional } from "../../types/Usuario";
import stylesGlobal from "../../styles/styles";
import styles from "./styles";

function Profissionais() {

    const [profissionais, setProfissionais] = useState<Profissional[]>([]);

    useEffect(() => {
        async function carregarProfissionais() {
            const dados = await listarProfissionais();
            setProfissionais(dados);
        }
        carregarProfissionais();
    }, []);

    return(
        <View style={stylesGlobal.container}>
            <Cabecalho/>

            <View style={stylesGlobal.containerApresentacao}>
                <TextoApresentacao
                    titulo="Profissionais"
                    descricao="Veja todos os profissionais"
                />
            </View>

            <View style={styles.container}>
            <ScrollView>
                {profissionais.map((profissional) => (
                    <View style={styles.card} key={profissional.id}>
                    <CardProfissional
                        profissional={profissional}
                    />
                    </View>
                ))}
            </ScrollView>
            </View>
        </View>
    )
}

export default Profissionais;