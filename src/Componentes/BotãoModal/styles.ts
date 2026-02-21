import { StyleSheet } from "react-native";
import { CORES } from "../../../Theme";

const styles = StyleSheet.create({
    botao:{
        width:168,
        height:47,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:2,
    },
    titulo:{
        color:CORES.textoBotao,
        fontWeight:'bold'
    }
})

export default styles;