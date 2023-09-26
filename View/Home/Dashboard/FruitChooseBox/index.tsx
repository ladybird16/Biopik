import { View, Text } from 'react-native'
import React from 'react'
import FruitChooseBoxView from './FruitChooseBoxView'

const FruitChooseBox = ({navigation,route}:FruitChooseBoxProps) => {
  return (
    <View>
      <FruitChooseBoxView navigation={navigation}/>
    </View>
  )
}

export default FruitChooseBox
interface FruitChooseBoxProps{
  navigation?: any;
  route?: any;
}