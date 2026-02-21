import { StyleSheet } from "react-native";
import { CORES } from "../../../Theme";

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    botaoAdicionar:{
        position:'absolute',
        bottom: 24,
        right: 24,    
    },
    card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginHorizontal: 16,
    marginBottom: 20,
    elevation: 4,
    overflow: "hidden",
    },

    cardImagem: {
    width: "100%",
    height: 200,
    },

    cardConteudo: {
    padding: 12,
    },

    titulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 6,
    },

    descricao: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
    },

    rodape: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    },

    autor: {
    fontSize: 12,
    color: "#888",
    },

    botao: {
    backgroundColor: "#1DB954",
    color: "#fff",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    fontWeight: "bold",
    }

    })

export default styles;