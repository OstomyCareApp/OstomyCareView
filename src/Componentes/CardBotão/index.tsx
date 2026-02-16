import { TouchableOpacity, Text, TouchableOpacityProps, View } from "react-native";
import styles from "./style";
import Ionicons from '@expo/vector-icons/Ionicons';
import { ComponentType } from "react";

type Props = TouchableOpacityProps &{
    titulo:string;
    texto:string;
    Icon:ComponentType<any>;
    nome:string
    tamanhoIcone:number;
    corIcone:string;
}
function CardBotao({titulo,texto, Icon,nome, tamanhoIcone, corIcone,...rest}:Props){
    return(
        <TouchableOpacity style={styles.botao} {...rest}>
            <Icon
            name={nome}
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