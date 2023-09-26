import { View, Text } from 'react-native'
import React from 'react'

const FruitChooseBoxView = ({navigation,route}:FruitChooseBoxViewProps) => {
  return (
    <View>
      <Text>FruitChooseBoxView</Text>
      
    </View>
  )
}

export default FruitChooseBoxView

interface FruitChooseBoxViewProps{
  navigation?: any;
  route?: any;
}