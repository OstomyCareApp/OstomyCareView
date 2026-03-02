import { StyleSheet } from "react-native";
import { CORES, SIZE_TEXT } from "../../../Theme";

const styles= StyleSheet.create({
    container:{
        alignItems:'center',
        paddingVertical:20,
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
    scrollContainer:{
    },
    dropDown:{
        width:"100%",
        height:50,
        backgroundColor: CORES.campoEntradaDeTexto,
        borderRadius:2,
        paddingHorizontal:12,
        marginTop:28
    },
    placeholder:{
        color:CORES.titulo,
        fontSize:14
    },
    containerInput:{
       marginBottom:20
    }
    
})

export default styles;