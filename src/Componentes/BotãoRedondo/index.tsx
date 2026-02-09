import { TouchableOpacity , TouchableOpacityProps} from "react-native";
import styles from "./styles";
import { AntDesign } from '@expo/vector-icons';

type Props= TouchableOpacityProps &{
    icone: keyof typeof AntDesign.glyphMap;
    tamanhoIcone: number;
    corIcone: string;
}
function BotaoRedondo({icone, tamanhoIcone, corIcone, ...rest}:Props){
    return(
        <TouchableOpacity style={styles.botao} {...rest}>
            <AntDesign
            name={icone}
            size={tamanhoIcone}
            color={corIcone}
            />
        </TouchableOpacity>
    )
}

export default BotaoRedondo;