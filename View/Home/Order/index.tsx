import { View, Text } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

import OrderList from './OrderList';
import OrderDetails from './OrderDetails/inderx';

const Stack = createStackNavigator();

const Order = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false,gestureEnabled:true}}>
       <Stack.Screen name="OrderList" component={OrderList} />
       <Stack.Screen name="OrderDetails" component={OrderDetails}/>
    </Stack.Navigator>
  )
}

export default Order