import { StyleSheet } from "react-native";
import { BORDER_RADIUS, CORES, HEIGTH, WIDTH } from "../../../Theme";


const styles = StyleSheet.create({

    botao:{
        backgroundColor: CORES.cartaoNavegacao,
        width:WIDTH.botaoNavegaçao,
        height:HEIGTH.botaoNavegacao,
        borderRadius:BORDER_RADIUS.cartaoNavegacao,
        borderColor:CORES.botao,
        borderWidth:1,

        justifyContent:'center',
        paddingHorizontal:10,
    },
    titulo:{
        fontWeight:'bold',
        color:CORES.tituloCardLink,
        marginBottom: 4,
    },
    texto:{
        color:CORES.titulo
    }, 
    icone:{
        marginBottom: 4,
    }
})

export default styles;