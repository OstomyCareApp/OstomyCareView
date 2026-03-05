import { Linking, Alert } from "react-native";

const supportedURL = "https://wa.me/";

type MensagemProps = {
    telefone: string;
    mensagem: string;
};

export async function enviarMensagemWhatsApp({ telefone, mensagem }: MensagemProps) {

    const numero = telefone.replace(/\D/g, "");
    const url = `${supportedURL}55${numero}?text=${encodeURIComponent(mensagem)}`;
    
    const supported = await Linking.canOpenURL(url);

    if (supported) {
        await Linking.openURL(url);
    } else {
        Alert.alert("Erro", "Não foi possível abrir o WhatsApp.");
    }
}