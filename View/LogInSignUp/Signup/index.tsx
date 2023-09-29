import { View, Text } from 'react-native'
import React from 'react'
import SignupView from './SignupView'

const Singup = ({navigation}:SignupProps) => {
    return (
   
        <SignupView  navigation={navigation}  />   
      )
}

export default Singup
interface SignupProps{
    navigation?: any;
}