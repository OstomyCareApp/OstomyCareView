
import Cabecalho from "../../Componentes/Cabeçalho"
import { View} from "react-native"
import BotaoIcone from "../../Componentes/BotãoComIcone"
import { CORES } from "../../../Theme"

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from "./styles";
import TextoApresentacao from "../../Componentes/TextoApresentação";
import stylesGlobal from "../../styles/styles";
import { useNavigation } from "@react-navigation/native";
import { StackParamList } from "../../routes/types";
import { StackNavigationProp } from "@react-navigation/stack"; 
type NavigationProps = StackNavigationProp< StackParamList,"Inicial">;
function Perfil(){
    const navigato= useNavigation<NavigationProps>();

    function sair(){
        navigato.navigate("Inicial");
    }
    return(
        <View style={ stylesGlobal.container}>
            <Cabecalho></Cabecalho>

            <View style ={stylesGlobal.containerApresentacao}>
                <TextoApresentacao
                titulo="Meu perfil"
                descricao="Acesse suas informações"
                ></TextoApresentacao>
            </View>
        
            <View style={styles.containerBotao}>
                <BotaoIcone  titulo={'Dados Cadastrais'} 
                Icon ={Ionicons} nomeIcone={'information-circle-outline'} 
                tamanho={26} 
                cor={CORES.titulo}></BotaoIcone>

                <BotaoIcone titulo={'Alterar senha'} 
                Icon ={MaterialIcons} nomeIcone={'lock-outline'} 
                tamanho={24} 
                cor={CORES.titulo}></BotaoIcone>


                <BotaoIcone titulo={'Sair'} 
                Icon ={MaterialIcons} nomeIcone={'logout'} 
                tamanho={22} 
                cor={CORES.titulo}
                onPress={sair}
                ></BotaoIcone>
                
            </View> 
        </View>
        
    )
}

export default Perfil;