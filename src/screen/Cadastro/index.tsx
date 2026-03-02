import { ScrollView, Text,View, Image } from "react-native";
import styles from "./styles";
import stylesGlobal from "../../styles/styles";
import { useForm, useWatch , Controller,} from "react-hook-form";
import InputTitulo from "../../Componentes/InputComTitulo";
import Botao from "../../Componentes/Botão";
import { Dropdown } from 'react-native-element-dropdown';
import { UsuarioCadastro } from "../../types/Usuario";
import { cadastrarUsuario } from "../../services/auth/authService";
import { useNavigation } from "@react-navigation/native";
import { StackParamList } from "../../routes/types";
import { StackNavigationProp } from "@react-navigation/stack";
type NavigationProps = StackNavigationProp< StackParamList,"Inicial">;
function Cadastro(){
    
    const {control, handleSubmit, watch} = useForm<UsuarioCadastro>();
    const tipoUsuario = watch("tipoUsuario");
    const data = [
    { label: 'Paciente', value: 'PACIENTE' },
    { label: 'Profissional', value: 'PROFISSIONAL' },
    ];
    const navigate = useNavigation<NavigationProps>();
    const onSubmit = async (data: UsuarioCadastro) => {
        try{
            await cadastrarUsuario(data);
            alert("Usuário cadastrado com sucesso");
            navigate.navigate("Inicial")
            
        }catch(error){
            alert("Erro ao cadastrar usuário");
        }

};
    return(
        <View style={[stylesGlobal.container, styles.container]}>
            <View>
                {/*Pode virar um componente*/}
                <Image 
                source= {require('../../../assets/logoWithNameAndNoBackgroun.png')}
                style={styles.logo}></Image>  
            </View>

            <Text style = {styles.titulo}>Cadastre-se</Text>

            <ScrollView style={styles.scrollContainer}>

            <View style={styles.containerInput}>
            <InputTitulo
            titulo="Nome completo"
            descricao="Digite seu nome "
            name="nome"
            control={control}
            />
            </View>

            <View style={styles.containerInput}>
            <InputTitulo
            titulo="Email"
            descricao="Digite seu email "
            name="email"
            control={control}
            style={styles.input}
            />
            </View>

            <View style={styles.containerInput}>
            <InputTitulo
            titulo="Telefone"
            descricao="Digite seu telefone "
            name="telefone"
            control={control}
            />
            </View>

            <View style={styles.containerInput}>
            <InputTitulo
            titulo="Senha"
            descricao="Digite sua senha "
            name="senha"
            control={control}
            />
            </View>
        
            <View style={styles.containerInput}>
            <InputTitulo
            titulo="Confirmar senha"
            descricao="Digite a mesma senha "
            name="senha"
            control={control}
            /> 
            </View>

            <View style={styles.containerInput}>
            <Controller
            control={control}
            name="tipoUsuario"
            render={({ field: { onChange, value } }) => (
                <Dropdown
                style={[styles.dropDown]}
                selectedTextStyle={styles.placeholder}
                placeholderStyle= {styles.placeholder}
                data={data}
                labelField="label"
                valueField="value"
                value={value}
                placeholder="Você é"
                onChange={item => onChange(item.value)}
                />
            )}
            />
            </View>

            {tipoUsuario === "PROFISSIONAL" && (
            <View style= {[styles.scrollContainer]}>
            <View >
            <View style={styles.containerInput}>
            <InputTitulo
                titulo="Número do COREN"
                descricao="Digite seu COREN"
                name="numeroCoren"
                control={control}
            />
            </View>
            </View>

            <View style={styles.containerInput}>
            <InputTitulo
                titulo="Exercício profissional"
                descricao="Digite sua especialidade"
                name="exercicioProfissional"
                control={control}
            />
            </View>
            </View>
            )}

            <View style={styles.container}>
                <Botao onPress={handleSubmit(onSubmit)}
                titulo="Salvar">
            
                </Botao>
            </View>
            </ScrollView>
        </View>
    )
}
export default Cadastro;