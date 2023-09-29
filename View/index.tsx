import { View, Text } from 'react-native'
import 'react-native-gesture-handler';
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import LogInSignUp from './LogInSignUp';
import Home from './Home';
import Drawer1 from './LogInSignUp/Drawer';
// import LogInSignUp from './LogInSignUp/Drawer';

const Stack = createStackNavigator();
const MainRoute = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Drawer" component={Drawer1} />
      
      <Stack.Screen name="LogInSignUp" component={LogInSignUp}  />
      <Stack.Screen name="Home" component={Home} />
   
     {/* <Stack.Screen name="Login" component={Drawer1} /> */}
    </Stack.Navigator>
  )
}

export default MainRoute