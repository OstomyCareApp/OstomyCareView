
import { Text, View, Image, Alert } from "react-native";
import { useForm } from "react-hook-form";
import { UsuarioLogin } from "../../types/Usuario";
import stylesGlobal from "../../styles/styles";
import styles from "./styles";
import InputTitulo from "../../Componentes/InputComTitulo"
import Botao from "../../Componentes/Botão";
import { login } from "../../services/auth/authService";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "../../routes/types";
import { useAuth } from "../../context/AuthContext";

type NavigationProps = StackNavigationProp< StackParamList,"Principal">;
function Login(){
    const navigate= useNavigation<NavigationProps>();
    const {control, handleSubmit} = useForm<UsuarioLogin>();
    const { signIn } = useAuth();

    const onSubmit = async (data: UsuarioLogin) => {

        try{
            console.log(data);
            const dadosUsuario = await login(data);
            console.log( dadosUsuario);
            signIn(dadosUsuario)
            Alert.alert("Sucesso", "Login realizado");
            navigate.navigate("Principal");

        }catch(error:any){
            console.log( "Erro", error.response?.data);
            Alert.alert("Erro", "Email ou senha inválidos");
        }
    }

    return(
        <View style={[stylesGlobal.container, styles.container]}>
            <View>
                {/*Pode virar um componente*/}
                <Image 
                source= {require('../../../assets/logoWithNameAndNoBackgroun.png')}
                style={styles.logo}></Image>  
            </View>
        
            <Text style = {styles.titulo}>Faça login</Text>
        
            <View style = {styles.containerInput}>
                <InputTitulo
                titulo="Email"
                descricao="Digite seu email "
                name="email"
                control={control}
                style={styles.input}
                />
                </View>

                <View style = {styles.containerInput}>
                <InputTitulo
                titulo="Senha"
                descricao="Digite sua senha "
                name="senha"
                control={control}
                style={styles.input}
                />
                </View>

                <View style ={styles.botao}>
                    <Botao 
                    onPress={handleSubmit(onSubmit)}
                    titulo="Entrar">
                    </Botao>
                </View>
            </View>

    )
}


export default Login;