import { StyleSheet } from "react-native";
import { BORDER_RADIUS, CORES, HEIGTH, SIZE_TEXT, WIDTH } from "../../../Theme";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
    },
    botao:{
        backgroundColor:CORES.botao,
        borderRadius:BORDER_RADIUS.botao,
        width: WIDTH.botao,
        height:HEIGTH.botao,

        alignItems:'center',
        justifyContent:'center'
    },
    titulo:{
        color:CORES.textoBotao,
        fontSize:SIZE_TEXT.tituloBotao,
        fontWeight: 'bold'
    }
})


    



export default styles;