import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

 import Icon from 'react-native-vector-icons/Ionicons';
import Cart from './Cart';
import Dashboard from './Dashboard';
import Order from './Order';
import Profile from './Profile';
const Tab = createBottomTabNavigator();
const Home = () => {

  return (

    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {backgroundColor: '#75c22d'},
        headerShown: false,
        tabBarShowLabel: false,      }}>
      <Tab.Screen
        options={{
          tabBarIcon: val => {
            return (
              <Icon
                color={val.focused ? 'white' : '#262424'}
                name="grid-outline"
                size={28}
              />
            );
          },
        }}
        name="Dashboard"
        component={Dashboard}
      />
      <Tab.Screen
        options={{
          tabBarIcon: val => {
            return (
              <Icon
                color={val.focused ? 'white' : '#262424'}
                name="bag-handle-outline"
                size={30}
              />
            );
          },
        }}
        name="Order"
        component={Order}
      />
      <Tab.Screen
        options={{
          tabBarIcon: val => {
            return (
              <Icon
                color={val.focused ? 'white' : '#262424'}
                name="cart-outline"
                size={30}
              />
            );
          },
        }}
        name="Cart"
        component={Cart}
      />
      <Tab.Screen
        options={{
          tabBarIcon: val => {
            return (
              <Icon
                color={val.focused ? 'white' : '#262424'}
                name="person-circle-outline"
                size={30}
              />
            );
          },
        }}
        name="Profile"
        component={Profile}
      />




    </Tab.Navigator>
  );
};

export default Home;
