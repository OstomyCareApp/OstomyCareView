
import { StyleSheet, View } from 'react-native';
import CardBotao from './src/Componentes/CardBotão';
import { CORES } from './Theme';

export default function App() {
  return (
    <View style={styles.container}>
    <CardBotao titulo= 'Artigo'texto='Registre sua rotina de cuidados' icone='chatbox-outline' tamanhoIcone={30} corIcone={CORES.iconeDoCartao}></CardBotao>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
