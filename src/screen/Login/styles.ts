import { StyleSheet } from "react-native";
import { CORES, SIZE_TEXT } from "../../../Theme";

const styles= StyleSheet.create({
    container:{
        alignItems:'center',
        paddingTop:60
    },
    logo:{
        width:180,
        height:180, 
    },
    titulo:{
        fontSize: 20,
        fontWeight:'bold',
        color:CORES.titulo,
        paddingBottom:20
    },
    input:{
        width:360,
    },
    botao:{
        paddingTop:50
    },
    containerInput:{
        margin:10
    },
})

export default styles;