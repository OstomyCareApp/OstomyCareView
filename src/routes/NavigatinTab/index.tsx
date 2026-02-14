import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import Perfil from "../../screen/Perfil";

import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { CORES } from "../../../Theme";
import Principal from "../../screen/Principal";

const Tab = createBottomTabNavigator();

function NavigationTab(){
    return(
        <Tab.Navigator 
        screenOptions={{
            headerShown: false, 
            tabBarActiveTintColor : CORES.botao}}> 
            <Tab.Screen
            name="Início"
            component={Principal}
            options={{
                tabBarIcon: ()=> <AntDesign name="home" size={24} color={CORES.iconeMenuNavegacao}/>
            }}/>

            <Tab.Screen
            name="Diário"
            component={Principal}
            options={{
                tabBarIcon: ()=><AntDesign name="book" size={24} color={CORES.iconeMenuNavegacao} />
            }}
            />

            <Tab.Screen
            name="Profissionais"
            component={Principal}
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

export default NavigationTab;