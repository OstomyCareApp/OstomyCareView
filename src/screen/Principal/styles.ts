import { StyleSheet } from "react-native";
import { CORES } from "../../../Theme";

const styles = StyleSheet.create({
    container: {
        flex:1, 
    },
    containerApresentacao:{
        paddingHorizontal:40,  
    },
    containerCards:{
        flexDirection:'row',
        justifyContent:'center',
        gap:40,
        paddingTop:40
    },
    containerSobreNos:{
        alignItems:'center',
        paddingHorizontal:30,
        paddingTop:70,
    },
    sobreNos:{
        paddingBottom:30
    },
    titulo:{
        fontWeight:'bold',
        color:CORES.tituloApresentacao,
        fontSize:17,
        paddingBottom:20,
    },
    tituloDescricao:{
        fontWeight:'bold',
        fontSize:16,
        color:CORES.titulo,
    },
    descricao:{
    },
    contentContainer: {
        paddingVertical: 20
    }
})

export default styles;