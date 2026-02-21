import { StyleSheet } from "react-native";
import { CORES, SIZE_TEXT } from "../../../../Theme";

const styles= StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        marginTop:20
    },
    camposTexto:{
        gap:24
    },
    titulo:{
        fontSize:SIZE_TEXT.titulo,
        fontWeight:'bold',
        color:CORES.titulo
    },
    botaoSalvar:{
        backgroundColor:CORES.botao
    },
    botaoCancelar:{
        backgroundColor:CORES.botaoCancelamento
    },
    containerBotoes:{
        flexDirection:'row',
        gap:24
    },
    campoConteudo:{
        height:100,
    },
    image:{
        width:"100%",
        height:200,
        backgroundColor:CORES.campoEntradaDeTexto,
        borderRadius:4,
        overflow:'hidden',
        marginBottom:24

    },
    containerImage:{
        width:"100%",
        height:"100%",
        justifyContent:"center",
        alignItems:"center"
    },
    tituloCampoImagem:{
        marginTop:8,
        color:CORES.subtitulo
    }
})

export default styles;