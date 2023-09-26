import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import Signup from './Signup';


const Stack = createStackNavigator();
const LogInSignUp = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name="Signup" component={Signup} />
    <Stack.Screen name="Login" component={Login} />

    </Stack.Navigator> 
  )
}

export default LogInSignUp