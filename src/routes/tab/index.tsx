
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Principal from '../../screen/Principal';
import Perfil from '../../screen/Perfil';
import Diario from '../../screen/Diário';
import Profissionais from '../../screen/Profissionais';
import Artigos from '../../screen/Artigos';
import { TabParamList } from '../types';
import Ionicons from '@expo/vector-icons/Ionicons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { CORES } from '../../../Theme';

function Tabs(){   
const Tab = createBottomTabNavigator<TabParamList>();
    return(
        <Tab.Navigator
        screenOptions={{headerShown:false, tabBarActiveTintColor:"#1CBE73" }}>
            <Tab.Screen name='Inicio' component={Principal} 
            options={{tabBarIcon:()=> 
            <Ionicons name="home-outline" size={24} color={CORES.iconeMenuNavegacao} />}}
            />
            <Tab.Screen name='Diario' component={Diario}
            options={{tabBarIcon:()=> 
            <SimpleLineIcons name="notebook" size={24} color={CORES.iconeMenuNavegacao} />}}
            />
            <Tab.Screen name='Profissionais' component={Profissionais}/>
            <Tab.Screen name='Artigos' component={Artigos}
            options={{tabBarIcon:()=> <Ionicons name="library-outline" size={24} color={CORES.iconeMenuNavegacao} />}}
            />
            <Tab.Screen name='Perfil' component={Perfil}
            options={{tabBarIcon:()=> 
            <Ionicons name="person-outline" size={24} color={CORES.iconeMenuNavegacao} />}}
            />
        </Tab.Navigator>
    )
}

export default Tabs;