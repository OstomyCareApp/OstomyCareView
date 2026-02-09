import { StyleSheet } from "react-native";
import { BORDER_RADIUS, CORES, HEIGTH, SIZE_TEXT, WIDTH } from "../../../Theme";

const styles = StyleSheet.create({
    titulo:{
        fontSize:SIZE_TEXT.tituloCampoEntradaTexto,
        color:CORES.titulo,
        paddingBottom:10
    },
    entradaTexto:{
        backgroundColor:CORES.campoEntradaDeTexto,
        height:HEIGTH.input,
        width:WIDTH.input,
        borderRadius:BORDER_RADIUS.campoDeTextoSimples,
        paddingHorizontal:8,
        color:CORES.titulo
    },        
    
})

export default styles;