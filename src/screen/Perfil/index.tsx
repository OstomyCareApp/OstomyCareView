
import Cabecalho from "../../Componentes/Cabeçalho"
import { View} from "react-native"
import BotaoIcone from "../../Componentes/BotãoComIcone"
import { CORES } from "../../../Theme"

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from "./styles";
import TextoApresentacao from "../../Componentes/TextoApresentação";
function Perfil(){
    return(
        <View style={ styles.container}>
            <Cabecalho></Cabecalho>

            <View style ={styles.apresentacao}>
                <TextoApresentacao
                titulo="Meu perfil"
                descricao="Acesse suas informações"
                ></TextoApresentacao>
            </View>
           
            <View style={styles.containerBotao}>
                <BotaoIcone titulo={'Dados Cadastrais'} 
                Icon ={Ionicons} nomeIcone={'information-circle-outline'} 
                tamanho={26} 
                cor={CORES.titulo}></BotaoIcone>

                <BotaoIcone titulo={'Alterar senha'} 
                Icon ={MaterialIcons} nomeIcone={'lock-outline'} 
                tamanho={24} 
                cor={CORES.titulo}></BotaoIcone>

                <BotaoIcone titulo={'Dados Cadastrais'} 
                Icon ={MaterialIcons} nomeIcone={'logout'} 
                tamanho={22} 
                cor={CORES.titulo}></BotaoIcone>
            </View> 
        </View>
        
    )
}

export default Perfil;