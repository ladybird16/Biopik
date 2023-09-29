import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import FrontPageView from './FrontPageView'

const FrontPage = ({navigation}:FrontPageProps) => {
  return (
    <View>
      <FrontPageView navigation={navigation}/>
    </View>
  )
}

export default FrontPage
interface FrontPageProps{
  navigation?: any;
}