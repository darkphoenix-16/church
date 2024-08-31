import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from './Navigation/Stack';

export default function App() {
  return (
    <View style={{flex:1}}>
      <StackNavigator></StackNavigator>
    </View>
  );
}


