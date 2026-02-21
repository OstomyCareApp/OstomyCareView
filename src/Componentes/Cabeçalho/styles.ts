import { StyleSheet } from "react-native";
import { CORES } from "../../../Theme";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 40,  
    },
    botaoVoltar: {
        width:30,
        justifyContent: 'center',
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 42,
        height: 42,
    },
    titulo: {
        fontSize: 12,
        fontWeight: '600',
        color: '#02734A'
    },
    subtitulo:{
        color:'#2BBC7B',
        fontSize: 12,
        fontWeight: '600'
    },
    botaoPerfil: {
        width: 80,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal:150
    },
    tituloPerfil: {
        fontSize: 12,
        marginTop: 2,
        color: CORES.titulo,
        fontWeight: '600',
    },
    tituloContainer:{
        flexDirection:'row'
    }
});

export default styles;
