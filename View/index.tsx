import { View, Text } from 'react-native'
import 'react-native-gesture-handler';
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import LogInSignUp from './LogInSignUp';
import Home from './Home';

const Stack = createStackNavigator();
const MainRoute = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LogInSignUp" component={LogInSignUp} />
   
    </Stack.Navigator>
  )
}

export default MainRoute