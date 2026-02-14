import { Image, View } from "react-native";
import styles from './styles'
import Botao from "../../Componentes/Botão";
import { useNavigation } from "@react-navigation/native";

function Inicial(){

    const navigation = useNavigation();

    function irParaTelaPrincipal(){
        navigation.navigate("App");
    }
    return(
        <View style={styles.container}>
            <View>
                <Image 
                source= {require('../../../assets/logoWithName.jpeg')}
                style={styles.logo}></Image>  
            </View>

            <View style ={styles.containerBotao}>
                <Botao 
                titulo="Entrar"
                onPress={irParaTelaPrincipal}></Botao>
                <Botao titulo="Cadastar"></Botao>
            </View>
        </View>
    )
}

export default Inicial;