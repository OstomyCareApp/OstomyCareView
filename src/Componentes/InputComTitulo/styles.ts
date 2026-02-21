import { StyleSheet } from "react-native";
import { BORDER_RADIUS, CORES, HEIGTH, SIZE_TEXT, WIDTH } from "../../../Theme";

const styles = StyleSheet.create({
    titulo:{
        fontSize:14,
        color:CORES.titulo,
        paddingBottom:10
    },
    entradaTexto:{
        backgroundColor:CORES.campoEntradaDeTexto,
        height:HEIGTH.input,
        width:"100%",
        borderRadius:BORDER_RADIUS.campoDeTextoSimples,
        paddingHorizontal:8,
        color:CORES.titulo
    },        
    
})

export default styles;