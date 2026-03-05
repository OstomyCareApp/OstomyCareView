import { StyleSheet } from "react-native";
import { CORES } from "../../../Theme";

const styles = StyleSheet.create({

card:{
    borderRadius:16,
    borderColor:"#E5E5E5",
    borderWidth:1,
    padding:20,
    backgroundColor:"#FFF",
    width:350,

    shadowColor:"#000",
    shadowOpacity:0.1,
    shadowRadius:6,
    shadowOffset:{ width:0, height:3 },
    elevation:3
},

cardHeader:{
    flexDirection:'row',
    alignItems:'center',
    gap:15
},

avatar:{
    width:70,
    height:70,
    borderRadius:35
},

infoContainer:{
    flex:1,
    gap:3
},

titulo:{
    fontWeight:'bold',
    fontSize:16,
    color:"#2B2B2B"
},

info:{
    fontSize:14,
    color:"#6B6B6B"
},

divider:{
    height:1,
    backgroundColor:"#E5E5E5",
    marginVertical:15
},

contatoContainer:{
    gap:6,
    marginBottom:15
},

email:{
    color:"#6B6B6B",
    fontSize:14
},

telefone:{
    color:"#6B6B6B",
    fontSize:14
},

botao:{
    backgroundColor:CORES.botao,
    paddingVertical:12,
    borderRadius:6,
    alignItems:"center"
},

textoBotao:{
    color:"#FFF",
    fontWeight:"bold",
    fontSize:15
}

});

export default styles;