import { View, Text } from 'react-native'
import React from 'react'
import VegChooseBoxView from './VegChooseBoxView'

const VegChooseBox = ({navigation,route}:VegChooseBoxProps) => {
  return (
    <View>
      <VegChooseBoxView navigation={navigation}/>
    </View>
  )
}

export default VegChooseBox
interface VegChooseBoxProps{
  navigation?: any;
  route?: any;
}