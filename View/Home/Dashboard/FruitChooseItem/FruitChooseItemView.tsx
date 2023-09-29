import { View, Text } from 'react-native'
import React from 'react'

const FruitChooseItemView = ({navigation,route}:FruitChooseItemViewProps) => {
  return (
    <View>
      <Text>FruitChooseItemView</Text>
    </View>
  )
}

export default FruitChooseItemView
interface FruitChooseItemViewProps{
  navigation?: any;
  route?: any;
}