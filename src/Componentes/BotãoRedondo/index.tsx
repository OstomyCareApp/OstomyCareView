import { TouchableOpacity , TouchableOpacityProps} from "react-native";
import styles from "./styles";
import { ComponentType } from "react";

type Props= TouchableOpacityProps &{
    Icon: ComponentType<any>;
    nome: string;
    tamanhoIcone: number;
    corIcone: string;
}
function BotaoRedondo({Icon, nome, tamanhoIcone, corIcone, ...rest}:Props){
    return(
        <TouchableOpacity style={styles.botao} {...rest}>
            <Icon
            name={nome}
            size={tamanhoIcone}
            color={corIcone}
            />
        </TouchableOpacity>
    )
}

export default BotaoRedondo;