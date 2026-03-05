import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Profissional } from "../../types/Usuario";
import { enviarMensagemWhatsApp } from "../../services/whatsapp/WhatsAppService";

type Props = {
    profissional: Profissional;
}

function CardProfissional({ profissional }: Props) {

function handleEnviarMensagem() {
    const mensagem = `Olá ${profissional.nome}, vim pelo OstomyCare.`;

    enviarMensagemWhatsApp({
        telefone: profissional.telefone,
        mensagem: mensagem
    });
}

    return (
        <View style={styles.card}>

            <View style={styles.cardHeader}>

                <Image
                    source={require("../../../assets/logoNoName.png")}
                    style={styles.avatar}
                />

                <View style={styles.infoContainer}>
                    <Text style={styles.titulo}>
                        {profissional.nome}
                    </Text>

                    <Text style={styles.info}>
                        {profissional.exercicioProfissional}
                    </Text>

                    <Text style={styles.info}>
                        {profissional.numeroCoren}
                    </Text>
                </View>

            </View>

            <View style={styles.divider}/>

            <View style={styles.contatoContainer}>
                <Text style={styles.email}>
                    {profissional.email}
                </Text>

                <Text style={styles.telefone}>
                    {profissional.telefone}
                </Text>
            </View>

            <TouchableOpacity style={styles.botao} onPress={handleEnviarMensagem}>
                <Text style={styles.textoBotao}>
                    Enviar Mensagem
                </Text>
            </TouchableOpacity>

        </View>
    );
}

export default CardProfissional;