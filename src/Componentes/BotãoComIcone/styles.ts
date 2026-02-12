import { StyleSheet } from "react-native";
import { CORES, HEIGTH, WIDTH } from "../../../Theme";


const styles = StyleSheet.create({

    botao:{
        backgroundColor: CORES.cartaoDeInformacao,
        width:WIDTH.botao,
        height:HEIGTH.botao,
        alignItems:'center',
        flexDirection:'row',
        paddingHorizontal:12,
        gap:8,
        color:CORES.titulo
    },
    icone:{
        backgroundColor:CORES.botao,
        borderRadius:20,
        height:34,
        width:34,
        alignItems:'center',
        justifyContent:'center'
    }
})

export default styles;