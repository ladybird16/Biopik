import { View, Text } from 'react-native'
import React from 'react'
import ForgetpassView from './ForgetpassView'




const ForgetPass = ({navigation}:ForgetPassProps) => {
    return (
      <ForgetpassView navigation={navigation} />
    )
  }



export default ForgetPass
interface ForgetPassProps{
  navigation?:any;
}