import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import Perfil from "../screen/Perfil";
import TelaInicial from "../screen/TelaInicial";

import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { CORES } from "../../Theme";
const Tab = createBottomTabNavigator();

export default function TabRotas(){
    return(
        <Tab.Navigator screenOptions={{
            headerShown: false, 
            tabBarActiveTintColor : CORES.botao}}>
                
            <Tab.Screen
            name="Início"
            component={TelaInicial}
            options={{
                tabBarIcon: ()=> <AntDesign name="home" size={24} color={CORES.iconeMenuNavegacao}/>
            }}/>

            <Tab.Screen
            name="Diário"
            component={TelaInicial}
            options={{
                tabBarIcon: ()=><AntDesign name="book" size={24} color={CORES.iconeMenuNavegacao} />
            }}
            />

            <Tab.Screen
            name="Profissionais"
            component={TelaInicial}
            options={{
                tabBarIcon : ()=> <Ionicons name="people-sharp" size={26} color={CORES.iconeMenuNavegacao} />
            }}
            />

            <Tab.Screen
            name="Artigos"
            component={Perfil}
            options={{
                tabBarIcon : () => <MaterialIcons name="chat-bubble-outline" size={26} color={CORES.iconeMenuNavegacao} />
            }}
            />
        </Tab.Navigator>
    )
}