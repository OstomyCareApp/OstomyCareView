import {TouchableOpacity, Text } from "react-native";
import styles from "./styles";

type Props={
    titulo:string;
    onPress?: ()=> void;
}
function Botao({titulo, onPress}:Props){
    return(
        <TouchableOpacity 
        style={styles.botao}
        onPress={onPress}>
            <Text style ={styles.titulo}>{titulo}</Text>
        </TouchableOpacity>
    )
}

export default Botao;