import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import ProfileMain from './ProfileMain';
import EditProfile from './EditProfile';
import AddressList from './AddressList';
import AddressAdd from './AddressAdd';
import OrderList from '../Order/OrderList';
import AddressEdit from './AddressEdit';


const Stack = createStackNavigator();
const Profile = () => {
  
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
       <Stack.Screen name="ProfileMain" component={ProfileMain} />
       <Stack.Screen name="EditProfile" component={EditProfile} />
       <Stack.Screen name="AddressList" component={AddressList} />
       <Stack.Screen name="AddressAdd"  component={AddressAdd} />
       <Stack.Screen name="AddressEdit"  component={AddressEdit} />
       <Stack.Screen name="OrderList"  component={OrderList} />
    </Stack.Navigator>
  )
}

export default Profile