import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const FrontPage = ({navigation}:FrontPageProps) => {
  return (
    <View>
     <FrontPageView/>
      <FrontPageView navigation={navigation}/>
    </View>
  )
}

export default FrontPage
interface FrontPageProps{
  navigation?: any;
}