import { Text, TextInput, TextInputProps, View } from 'react-native';
import styles from './styles'
import { CORES } from '../../../Theme';

type Props= TextInputProps &{
    titulo:string;
    descricao:string
}
function InputTitulo({titulo, descricao,...rest}:Props){
    return(
        <View>
            <Text style={styles.titulo}>{titulo}</Text>
            <TextInput 
            style={styles.entradaTexto}
            placeholderTextColor={CORES.subtitulo}
            placeholder={descricao}
            //keyboardType={''} - usar essa propriedade pra definir o tipo de input
            {...rest}
            ></TextInput>
        </View>
    )
}

export default InputTitulo;