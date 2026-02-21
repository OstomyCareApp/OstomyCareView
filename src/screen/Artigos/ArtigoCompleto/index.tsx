import { View, Text, Image, ScrollView } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { StackParamList } from "../../../routes/types";
import { getImageUrl } from "../../../services/axios/api";
import Cabecalho from "../../../Componentes/Cabeçalho";
import styles from "./styles";

type RouteProps = RouteProp<StackParamList, "ArtigoCompleto">;

function ArtigoCompleto() {
    {/**Vai pegar as infromações da rota, no caso, o que vem da tela principal quando clico em Ler mais */}
    const route = useRoute<RouteProps>();
    {/*Vai extrair os dados do artigo*/}
    const { artigo } = route.params;

    return (
        <View style = {styles.container}> 
            <Cabecalho/>

        <ScrollView >
        <Image
            source={{ uri: getImageUrl(artigo.imagem.caminho) }}
            style={styles.imagemCapa}
        />

        <View style ={styles.conteudo}>
            <Text style = {styles.titulo}>
            {artigo.titulo}
            </Text>

            <Text style={styles.descricao}>
                Descrição: {artigo.descricao}
            </Text>

            <Text style={styles.texto}>
            {artigo.conteudo}
            </Text>

            {/**Criar o autor, mas ainda falta criar a entidade usuário */}
        </View>
        </ScrollView>
    </View>
    );
}

export default ArtigoCompleto;
