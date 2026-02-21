import { StyleSheet } from "react-native";
import { CORES } from "../../../../Theme";

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    imagemCapa:{
        width: "100%", 
        height: 250,
        borderRadius:10
    },
    conteudo:{
        paddingHorizontal:40,
        paddingVertical:8
    },
    titulo:{
        fontWeight:'bold',
        fontSize:25,
    },
    descricao:{
        fontSize:14,
        fontWeight:'bold',
        color:CORES.tituloCardLink
    },
    texto:{
        fontSize:16,
        paddingVertical:10
    }
})

export default styles;