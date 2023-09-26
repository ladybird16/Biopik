import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import FruitChooseBox from '../FruitChooseBox'
import FrontPageView from './FrontPageView'


const FrontPage = ({navigation}:FrontPageProps) => {
  return (
    <View>
      <Text>FrontPage</Text>
      <FrontPageView navigation={navigation}/>
    </View>
  )
}

export default FrontPage
interface FrontPageProps{
  navigation?: any;
}