import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './BottomTab';
import { SignUp } from '../Screens/Signup';
import { Login } from '../Screens/Login';
import { ForgottenPassword } from '../Screens/ForgottenPassword';




const Stack = createNativeStackNavigator();

export function StackNavigator() {
  return (
    <NavigationContainer>

    <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}} >
      <Stack.Screen name="HomeScreen" component={HomeScreen}/>
      <Stack.Screen name="Signup" component={SignUp}/>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Forgot" component={ForgottenPassword}/>
     
    </Stack.Navigator>
    </NavigationContainer>
  );
}