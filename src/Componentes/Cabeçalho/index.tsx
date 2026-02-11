import { TouchableOpacity, Image, Text, View, TouchableOpacityProps } from "react-native";
import styles from "./styles";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { CORES } from "../../../Theme";

//O TouchableOpacityProps servirá para usar o onPress nos botões
function Cabecalho() {
    return (
        <View style={styles.container}>

            <TouchableOpacity style={styles.botaoVoltar}>
                <MaterialIcons name="arrow-back-ios" size={24} color={CORES.titulo} />
            </TouchableOpacity>

            <View style={styles.logoContainer}>
                <Image 
                    source={require('../../../assets/logoNoName.png')}
                    style={styles.logo}
                />
                <View style = {styles.tituloContainer}>
                    <Text style={styles.titulo}>Ostomy</Text>
                    <Text style={styles.subtitulo}>Care</Text>
                </View>
                
            </View>

            <TouchableOpacity style={styles.botaoPerfil}>
                <FontAwesome name="user-circle" size={38} color={CORES.titulo} />
                <Text style={styles.tituloPerfil}>Meu perfil</Text>
            </TouchableOpacity>

        </View>
    )
}


export default Cabecalho;