import { Text, TouchableOpacity , TouchableOpacityProps} from "react-native";
import styles from "./styles";

type Props = TouchableOpacityProps &{
    titulo: string;
}
function BotaoModal({titulo, style,...rest}:Props){
    return(
        <TouchableOpacity {...rest} style={[styles.botao, style]}>
            <Text style={styles.titulo}>{titulo}</Text>
        </TouchableOpacity>
    )
}

export default BotaoModal;