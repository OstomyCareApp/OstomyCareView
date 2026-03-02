import { Text, TextInput, TextInputProps, View } from 'react-native';
import styles from './styles'
import { CORES } from '../../../Theme';
import { Controller, Control } from 'react-hook-form';

type Props = TextInputProps & {
    titulo: string;
    descricao: string;
    name: string;
    control: Control<any>;
}

function InputTitulo({
    titulo,
    descricao,
    style,
    name,
    control,
    ...rest
}: Props) {

    return (
        <View>
            <Text style={styles.titulo}>{titulo}</Text>
            <Controller
                control={control}
                name={name}
                render={({ field: { onChange, value } }) => (
                    <TextInput
                        style={[styles.entradaTexto, style]}
                        placeholderTextColor={CORES.subtitulo}
                        placeholder={descricao}
                        value={value}
                        onChangeText={onChange}
                        {...rest}
                    />
                )}
            />

        </View>
    )
}

export default InputTitulo;