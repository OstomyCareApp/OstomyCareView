import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import styles from "./styles";
import Cabecalho from "../../Componentes/Cabeçalho";
import BotaoRedondo from "../../Componentes/BotãoRedondo";
import AntDesign from '@expo/vector-icons/AntDesign';
import { CORES } from "../../../Theme";
import { useState, useEffect } from "react";
import ModalArtigo from "./Modal";
import { listarArtigos } from "../../services/artigo/artigoService";
import { FlatList, Image } from "react-native";
import { getImageUrl } from "../../services/axios/api";
import { useNavigation } from "@react-navigation/native";
import { StackParamList } from "../../routes/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Artigo } from "../../routes/types";

type NavigationProps = NativeStackNavigationProp<StackParamList,"ArtigoCompleto">;

function Artigos(){
    const [modalVisible, setModalVisible] = useState(false);
    const [artigos, setArtigos] = useState<Artigo[]>([]);
    const navigator = useNavigation<NavigationProps>();
    
    const carregarArtigos = async () => {
    try {
        const data = await listarArtigos();
        setArtigos(data);
    } catch (error) {
        console.log(error);
    }
    };

    useEffect(() => {
    carregarArtigos();
    }, []);

    function lerMais(artigo: Artigo) {
    navigator.navigate("ArtigoCompleto", { artigo });
    }

    return(
    <View style= {styles.container}>
        <Cabecalho/>
    
        <FlatList
        data={artigos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
            <View style={styles.card}>
            <Image
                source={{ uri: getImageUrl(item.imagem.caminho) }}
                style={styles.cardImagem}
            />
            <View style={styles.cardConteudo}>
                <Text style={styles.titulo}>{item.titulo}</Text>

                <Text style={styles.descricao}>
                {item.descricao}
                </Text>

                <View style={styles.rodape}>
                <Text style={styles.autor}>
                    Por:
                </Text>
                <TouchableOpacity onPress={() => lerMais(item)}>
                    <Text style={styles.botao}>Ler Mais</Text>
                </TouchableOpacity>
                </View>
            </View>

            </View>
        )}
        />

        <View style ={styles.botaoAdicionar}>
            <BotaoRedondo
            Icon={AntDesign}
            nome="plus"
            tamanhoIcone={28}
            corIcone={CORES.corIconeBotoes}
            onPress={()=>setModalVisible(true) }
                />
        </View>
        
        <ModalArtigo
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onCreated={carregarArtigos}
        />
        </View>
    )
}
export default Artigos;