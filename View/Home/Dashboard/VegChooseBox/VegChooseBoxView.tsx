import { View, Text } from 'react-native'
import React from 'react'

const VegChooseBoxView = ({navigation,route}:VegChooseBoxProps) => {
  return (
    <View>
      <Text>VegChooseBoxView</Text>
    </View>
  )
}

export default VegChooseBoxView
interface VegChooseBoxProps{
  navigation?: any;
  route?: any;
}