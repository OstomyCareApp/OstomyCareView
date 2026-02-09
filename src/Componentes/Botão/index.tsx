import {TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import styles from "./styles";

type Props= TouchableOpacityProps &{
    titulo:string;
}
function Botao({titulo,onPress}:Props){
    return(
        <TouchableOpacity 
        style={styles.botao}
        onPress={onPress}>
            <Text style ={styles.titulo}>{titulo}</Text>
        </TouchableOpacity>
    )
}

export default Botao;