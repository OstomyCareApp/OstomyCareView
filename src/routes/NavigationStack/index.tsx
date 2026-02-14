
import Inicial from "../../screen/Inicio";
import { createStackNavigator } from '@react-navigation/stack';
import NavigationTab from "../NavigatinTab"
import { RootStackParamList } from "../types";

const Stack = createStackNavigator<RootStackParamList>();

export function NavigationStack() {
    return (
        <Stack.Navigator initialRouteName = "Inicial">
            <Stack.Screen 
            name="Inicial" 
            component={Inicial}
            options={{
            headerShown:false
            }} />

            <Stack.Screen
            name="App"
            component={NavigationTab}
            options={{
                headerShown:false
            }}
            />
        </Stack.Navigator>
    )
}

export default NavigationStack;