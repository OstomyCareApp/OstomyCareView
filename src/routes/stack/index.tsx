import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicial from '../../screen/Inicio';
import Tabs from '../tab';
import { StackParamList } from '../types';
import ArtigoCompleto from '../../screen/Artigos/ArtigoCompleto';
import Cadastro from '../../screen/Cadastro';
import Login from '../../screen/Login';
function Stack (){
    const Stack = createNativeStackNavigator<StackParamList>();
    return(
        <Stack.Navigator 
        initialRouteName="Inicial"
        screenOptions={{headerShown:false}} >
            <Stack.Screen name='Inicial' component={Inicial}/>
            <Stack.Screen name='Principal' component={Tabs}/>
            <Stack.Screen name='ArtigoCompleto' component={ArtigoCompleto}/>
            <Stack.Screen name='Cadastro' component={Cadastro}/>
            <Stack.Screen name='Login' component ={Login}/>
        </Stack.Navigator>
    )
}

export default Stack;