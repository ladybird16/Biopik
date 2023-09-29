import React from 'react'
import FrontPage from './FrontPage'
import { createStackNavigator } from '@react-navigation/stack';
import FrontPage from './FrontPage';
import FruitChooseBox from './FruitChooseBox';
import FruitChooseItem from './FruitChooseItem';
import VegChooseBox from './VegChooseBox';
import VegChooseItem from './VegChooseItem';

const Stack = createStackNavigator();


const Dashboard = () => {
  return (
    <View>
      <Text>Dashboard</Text>
    </View>
  )
}

export default Dashboard