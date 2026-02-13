import { StyleSheet } from "react-native";
import { CORES } from "../../../Theme";

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:CORES.fundoTela
    },
    logo:{
        width:200,
        height:200,
        marginBottom:70
    },
    containerBotao:{
        gap:38
    }
})

export default styles;