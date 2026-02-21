import { StyleSheet } from "react-native";
import { BORDER_RADIUS, CORES, HEIGTH, WIDTH } from "../../../Theme";

const styles= StyleSheet.create({
    botao:{
        backgroundColor: CORES.botao,
        width:WIDTH.botaoRedondo,
        height:HEIGTH.botaoRedondo,
        borderRadius: BORDER_RADIUS.BotaoRedondo,

        alignItems:'center',
        justifyContent:'center',
    }
})

export default styles;