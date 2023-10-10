import { View, Text } from 'react-native'
import React from 'react'
import EditProfile from './EditProfile';
import ProfileMain from './ProfileMain';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const Profile = () => {
  
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
       <Stack.Screen name="ProfileMain" component={ProfileMain} />
       <Stack.Screen name="EditProfile" component={EditProfile} />
  
    </Stack.Navigator>
  )
}

export default Profile