import { View, Text } from 'react-native'
import React from 'react'
import LoginView from './LoginView'

const Login = ({navigation}:LoginProps) => {
  return (
    <LoginView navigation={navigation} />
  )
}

export default Login
interface LoginProps{
  navigation?:any;
}