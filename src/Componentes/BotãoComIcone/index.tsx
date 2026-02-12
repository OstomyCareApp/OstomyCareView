import { TouchableOpacity , TouchableOpacityProps, Text} from "react-native";
import { ComponentType } from "react";
import styles from "./styles";
import { View } from "react-native";

type Props={
    titulo:String
    Icon: ComponentType<any>;  
    nomeIcone: string;         
    tamanho?: number;
    cor?: string;
}

function BotaoIcone({titulo, Icon, nomeIcone, tamanho, cor, ...rest}:Props){
    return(
            <TouchableOpacity style = {styles.botao}{...rest}>
                <View style= {styles.icone}>
                    <Icon name={nomeIcone} size={tamanho} color={cor} />
                </View>
            
                <Text>{titulo}</Text>
            </TouchableOpacity>

    )
}

export default BotaoIcone;