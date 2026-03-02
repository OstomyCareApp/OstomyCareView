import { ScrollView, View } from "react-native";
import Cabecalho from "../../Componentes/Cabeçalho";
import TextoApresentacao from "../../Componentes/TextoApresentação";
import stylesGlobal from "../../styles/styles";
import InputTitulo from "../../Componentes/InputComTitulo";
import { useState } from "react";
function Diario(){

    return(
        <View>
            <Cabecalho/>

            <View style = {stylesGlobal.containerApresentacao} >
                <TextoApresentacao
                titulo="Diário"
                descricao="Informe como você esta se sentindo hoje.">
            </TextoApresentacao>
            </View>

            <ScrollView>
            
            </ScrollView>

            
        </View>
    )
}
export default Diario;