import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './BottomTab';


const Stack = createNativeStackNavigator();

export function StackNavigator() {
  return (
    <NavigationContainer>

    <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{headerShown:false}} >
      <Stack.Screen name="HomeScreen" component={HomeScreen}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}