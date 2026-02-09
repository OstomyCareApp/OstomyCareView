import { Image, View } from "react-native";
import styles from './styles'
import Botao from "../../Componentes/Botão";


function TelaInicial(){
    return(
        <View style={styles.container}>
            <View>
                <Image 
                source= {require('../../../assets/logoWithName.jpeg')}
                style={styles.logo}></Image>  
            </View>

            <View style ={styles.containerBotao}>
                <Botao titulo="Entrar"></Botao>
                <Botao titulo="Cadastar"></Botao>

            </View>
           
        </View>
        
    )
}

export default TelaInicial;