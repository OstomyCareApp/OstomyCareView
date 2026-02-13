import { StyleSheet } from "react-native";
import { CORES } from "../../../Theme";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:CORES.fundoTela

    },
    apresentacao:{
        paddingHorizontal:40,
    },
    containerBotao:{
        paddingVertical:200,
        justifyContent:'center',
        alignItems:'center',
        gap:30
    }
})

export default styles;