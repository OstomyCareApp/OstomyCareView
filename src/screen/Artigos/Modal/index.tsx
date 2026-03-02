import { View, Text, Modal, Alert , Image, TouchableOpacity} from "react-native";
import styles from "./styles";
import InputTitulo from "../../../Componentes/InputComTitulo";
import BotaoModal from "../../../Componentes/BotãoModal";
import {Ionicons} from '@expo/vector-icons'
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { uploadImagem} from "../../../services/imagem/imagemService";
import { criarArtigo } from "../../../services/artigo/artigoService";
import { useForm } from "react-hook-form";


type Props = {
    visible: boolean;
    onClose: () => void;
    onCreated: () => void;
}

type FormData = {
    titulo: string;
    descricao: string;
    conteudo: string;
}

function ModalArtigo({ visible, onClose,onCreated}: Props) {
    const { control, handleSubmit, reset } = useForm<FormData>();

    const [image, setImage] = useState<string | null>(null);

    const pickImage = async () => {

        let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'],
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };


    async function salvar(data:FormData) {
        if (!image) {
            Alert.alert("Selecione uma imagem");
            return;
        }
        try {
            const imagemResponse = await uploadImagem(image);
            const imagemId = imagemResponse.id;

            await criarArtigo({
                titulo: data.titulo,
                descricao: data.descricao,
                conteudo: data.conteudo,
                imagem: { id: imagemId },
                
                });

            Alert.alert("Artigo criado com sucesso!");
            reset();
            setImage(null);
            onClose();
            onCreated();

        } catch (error:any) {
            console.log(error);
            Alert.alert("Erro ao salvar artigo");
        }
    }

    return(
        <Modal
            animationType="slide"
            visible={visible}
            onRequestClose={onClose}
        >

            <View style= {styles.container}>

                <View style ={styles.camposTexto}>
                    <Text style={styles.titulo}>
                        Cadastre seu artigo
                    </Text>

                    <InputTitulo
                        titulo="Titulo"
                        descricao="Digite o título do seu artigo aqui"
                        name="titulo"
                        control={control}
                    />

                    <InputTitulo
                        titulo="Descrição"
                        descricao="Faça uma breve descrição sobre seu artigo"
                        name="descricao"
                        control={control}
                    />

                    <InputTitulo
                        titulo="Conteúdo"
                        descricao="Digite o conteúdo do seu artigo aqui"
                        multiline
                        style={styles.campoConteudo}
                        name="conteudo"
                        control={control}
                    />

                    <TouchableOpacity
                        style={styles.image}
                        onPress={pickImage}
                    >
                    {image ? (<Image
                                source={{ uri: image }}
                                style={styles.image}
                                />
                        ) : (
                            <View style={styles.containerImage}>
                                <Ionicons
                                    name="image-outline"
                                    size={38}
                                />

                                <Text style={styles.tituloCampoImagem}>
                                    Selecione a imagem de capa
                                </Text>
                            </View>
                        )}
                    </TouchableOpacity>
                </View>

                <View style= {styles.containerBotoes}>
                    <BotaoModal
                        titulo="Salvar"
                        style={styles.botaoSalvar}
                        onPress={handleSubmit(salvar)}
                    />

                    <BotaoModal
                        titulo="Cancelar"
                        style={styles.botaoCancelar}
                        onPress={onClose}
                    />
                </View>
            </View>
        </Modal>
    )
}

export default ModalArtigo;