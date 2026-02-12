import { View , Text} from "react-native";
import styles from "./styles";
type Props={
    titulo: string;
    descricao:string;
}

function TextoApresentacao({titulo, descricao}:Props){
    return(
        <View>
            <Text style ={styles.titulo}>{titulo}</Text>
            <Text style ={styles.descricao}>{descricao}</Text>
        </View>
    )
}

export default TextoApresentacao;