import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FormScreen from '../Screens/Form';
import ListScreen from '../Screens/List';


const Stack = createNativeStackNavigator();


export function RootNavigation() {
return (
<NavigationContainer>
<Stack.Navigator>
<Stack.Screen name="Form" component={FormScreen} options={{ title: 'Cadastro' }} />
<Stack.Screen name="List" component={ListScreen} options={{ title: 'Lista' }} />
</Stack.Navigator>
</NavigationContainer>
);
}