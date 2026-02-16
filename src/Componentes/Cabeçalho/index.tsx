import { TouchableOpacity, Image, Text, View, TouchableOpacityProps } from "react-native";
import styles from "./styles";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { CORES } from "../../../Theme";
import { useNavigation } from "@react-navigation/native";

//O TouchableOpacityProps servirá para usar o onPress nos botões
function Cabecalho() {
    const navigate= useNavigation();

    function voltar(){
        navigate.goBack();
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.botaoVoltar} onPress={voltar}>
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
        </View>
    )
}
export default Cabecalho;