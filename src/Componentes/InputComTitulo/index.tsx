import { Text, TextInput, TextInputProps, View } from 'react-native';
import styles from './styles'
import { CORES } from '../../../Theme';

type Props= TextInputProps &{
    titulo:string;
    descricao:string
}
function InputTitulo({titulo, descricao,style,...rest}:Props){
    return(
        <View>
            <Text style={styles.titulo}>{titulo}</Text>
            <TextInput 
            style={[styles.entradaTexto, style]}
            placeholderTextColor={CORES.subtitulo}
            placeholder={descricao}
            {...rest}
            ></TextInput>
        </View>
    )
}

export default InputTitulo;