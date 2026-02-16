import { StyleSheet } from "react-native";
import { CORES, SIZE_TEXT } from "../../../Theme";


const styles = StyleSheet.create({
    titulo:{
        fontSize: SIZE_TEXT.titulo,
        fontWeight:'bold',
        color:CORES.titulo,
        paddingBottom:10
    },
    descricao:{
        fontSize: SIZE_TEXT.descricao,
        color:CORES.titulo
    }
})

export default styles;