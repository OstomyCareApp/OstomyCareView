import { Image, View } from "react-native";
import styles from './styles'
import Botao from "../../Componentes/Botão";
import { useNavigation } from "@react-navigation/native";
import { StackParamList } from '../../routes/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


type NavigationProps = NativeStackNavigationProp< StackParamList,'Inicial'>;

function Inicial(){
    const navigate = useNavigation<NavigationProps>();

    function irParaPrincipal(){
        navigate.navigate("Principal");
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
                onPress={irParaPrincipal}
                ></Botao>
                <Botao titulo="Cadastar"></Botao>
            </View>
        </View>
    )
}

export default Inicial;