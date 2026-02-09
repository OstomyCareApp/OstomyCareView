import { TouchableOpacity, Text, TouchableOpacityProps, View } from "react-native";
import styles from "./style";
import Ionicons from '@expo/vector-icons/Ionicons';

type Props ={
    titulo:string;
    texto:string;
    icone: keyof typeof Ionicons.glyphMap;
    tamanhoIcone:number;
    corIcone:string;
}
function CardBotao({titulo,texto, icone, tamanhoIcone, corIcone,...rest}:Props){
    return(
        <TouchableOpacity style={styles.botao}>
            <Ionicons
            name={icone}
            size={tamanhoIcone}
            color={corIcone}
            style={styles.icone}
            />
            <Text style={styles.titulo}>{titulo}</Text>
            <Text style={styles.texto}>{texto}</Text>
        </TouchableOpacity>
    )
}

export default CardBotao;