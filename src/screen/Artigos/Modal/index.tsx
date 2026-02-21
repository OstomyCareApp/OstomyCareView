import { View, Text, Modal, Alert , Button, Image, TouchableOpacity} from "react-native";
import styles from "./styles";
import InputTitulo from "../../../Componentes/InputComTitulo";
import BotaoModal from "../../../Componentes/BotãoModal";
import {Ionicons} from '@expo/vector-icons'
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { uploadImagem} from "../../../services/imagem/imagemService";
import { criarArtigo } from "../../../services/artigo/artigoService";

type Props = {
    visible: boolean;
    onClose: () => void;
    onCreated: () => void;
}
function ModalArtigo({ visible, onClose,onCreated}: Props) {

    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [conteudo, setConteudo] = useState("");
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

    async function salvar() {
        if (!image) {
        Alert.alert("Selecione uma imagem");
        return;
        }

        if (!titulo || !descricao || !conteudo) {
        Alert.alert("Preencha todos os campos");
        return;
        }

        try {
            const imagemResponse = await uploadImagem(image);
            const imagemId = imagemResponse.id;

            await criarArtigo({
            titulo,
            descricao,
            conteudo,
            imagem: { id: imagemId }
            });

        Alert.alert("Artigo criado com sucesso!");
        onClose();
        onCreated();

        } catch (error: any) {
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
                    <Text style={styles.titulo}>Cadastre seu artigo</Text>
                    <InputTitulo
                    titulo="Titulo"
                    descricao="Digite o título do seu artigo aqui"
                    value={titulo}
                    onChangeText={setTitulo}
                    />

                    <InputTitulo
                    titulo="Descrição"
                    descricao="Faça uma breve descrição sobre seu artigo"
                    value={descricao}
                    onChangeText={setDescricao}
                    />

                    <InputTitulo
                    titulo="Conteúdo"
                    descricao="Digite o contéudo do seu artigo aqui"
                    multiline
                    style= {styles.campoConteudo}
                    value={conteudo}
                    onChangeText={setConteudo}
                    />

                    <TouchableOpacity style={styles.image} onPress={pickImage}>
                    {image ? (
                    <Image 
                    source={{ uri: image }} 
                    style={styles.image} 
                    />
                    ) : (
                    <View style={styles.containerImage}>
                        <Ionicons name="image-outline" size={38} />
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
                        onPress={salvar}
                        />
                        <BotaoModal 
                        titulo="Cancelar" 
                        style={styles.botaoCancelar}
                        onPress={onClose}/>
                </View>
            </View>
        </Modal>
    )
}

export default ModalArtigo;
