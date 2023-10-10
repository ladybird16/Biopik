import { View, Text } from 'react-native'
import React from 'react'
import LoginView from './LoginView'
import forgetPass from './ForgetPass';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AboutUs from './AboutUs';
import Drawer from '../Drawer';


const Login = ({navigation}:LoginProps) => {
  


  return (
    <>
    {/* <Drawer /> */}
    <LoginView navigation={navigation} />
    </>
  )
}


export default Login
interface LoginProps{
  navigation?:any;
}