import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from './screens/HomeScreen';
import JakatCalculator from './screens/JakatCalculator';
import JakatCalculator2 from './screens/JakatCalculator2';
import Payment from './screens/Payment';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* <Stack.Screen name="JakatCalculator" component={JakatCalculator}/> */}
        <Stack.Screen name="JakatCalculor2" component={JakatCalculator2}/>
        <Stack.Screen name="Payment" component={Payment}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
