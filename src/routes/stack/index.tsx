import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicial from '../../screen/Inicio';
import Tabs from '../tab';
import { StackParamList } from '../types';
function Stack (){
    const Stack = createNativeStackNavigator<StackParamList>();
    return(
        <Stack.Navigator 
        initialRouteName="Inicial"
        screenOptions={{headerShown:false}} >
            <Stack.Screen name='Inicial' component={Inicial}/>
            <Stack.Screen name='Principal' component={Tabs}/>
        </Stack.Navigator>
    )
}

export default Stack;