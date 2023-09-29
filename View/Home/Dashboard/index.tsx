import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import FrontPage from './FrontPage';
import FruitChooseBox from './FruitChooseBox';
import FruitChooseItem from './FruitChooseItem';
import VegChooseBox from './VegChooseBox';
import VegChooseItem from './VegChooseItem';
import { Text, View } from 'react-native';

const Stack = createStackNavigator();


const Dashboard = () => {
  return (
    <Stack.Navigator initialRouteName='FrontPage'
    // screenOptions={{headerShown:false,gestureEnabled:true}}
    >
       <Stack.Screen name="FrontPage" component={FrontPage} />
       <Stack.Screen name="VegChooseBox" component={VegChooseBox} />
       <Stack.Screen name="VegChooseItem" component={VegChooseItem} />
       <Stack.Screen name="FruitChooseBox" component={FruitChooseBox} />
       <Stack.Screen name="FruitChooseItem" component={FruitChooseItem} />
    </Stack.Navigator>
  )
}

export default Dashboard;