import { View, Text, ScrollView } from "react-native";
import Cabecalho from "../../Componentes/Cabeçalho";
import TextoApresentacao from "../../Componentes/TextoApresentação";
import styles from "./styles";
import CardBotao from "../../Componentes/CardBotão";
import { useNavigation } from "@react-navigation/native";
import { TabParamList } from "../../routes/types";
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import AntDesign from '@expo/vector-icons/AntDesign';
import { CORES } from "../../../Theme";
import Ionicons from '@expo/vector-icons/Ionicons';
import { SimpleLineIcons } from "@expo/vector-icons";

type NavigationProps = BottomTabNavigationProp< TabParamList,"Inicio">;

function Principal(){
    const navigation = useNavigation<NavigationProps>();

    function irParaDiario(){
        navigation.navigate("Diario")
    }

    function irParaArtigo(){
        navigation.navigate("Artigos")
    }

    return(
        <View style = {styles.container}>
            <Cabecalho/>

            <ScrollView contentContainerStyle={styles.contentContainer}>
            <View style = {styles.containerApresentacao}>
                <TextoApresentacao
                titulo="Ola, Visitante!"
                descricao="Seja bem-vindo(a) ao OstomyCare, nosso objetivo é o seu bem estar."/>
            </View>

            <View style = {styles.containerCards}>
                <CardBotao 
                titulo="Meu diário"
                texto="Registre sua rotina de cuidados"
                Icon={SimpleLineIcons}
                nome="notebook"
                tamanhoIcone={24}
                corIcone ={ CORES.botao}
                onPress={irParaDiario}/>

                <CardBotao 
                titulo="Artigos"
                texto="Artigos e imagens úteis"
                Icon={Ionicons}
                nome="library-outline"
                tamanhoIcone={26}
                corIcone ={ CORES.botao}
                onPress={irParaArtigo}/>
            </View>

            <View style = {styles.containerSobreNos}>
                <Text style ={styles.titulo}>Sobre o OstomyCare</Text>

                <View style= {styles.sobreNos}>
                    <Text style ={styles.tituloDescricao}>Quem somos?</Text>
                    <Text style = {styles.descricao}>O OstomyCare é uma aplicação voltada para o bem-estar de pacientes que se encontram ostomizados.</Text>
                </View>

                <View style= {styles.sobreNos}>
                    <Text style ={styles.tituloDescricao}>Qual é o nosso objetivo?</Text>
                    <Text style = {styles.descricao}>Auxiliar pacientes ostomizados, oferecendo orientações e cuidados que contribuam para um melhor tratamento
                    e uma maior qualidade de vida.
                    </Text>
                </View>
            </View>
            </ScrollView>
        </View>
    )
}

export default Principal;