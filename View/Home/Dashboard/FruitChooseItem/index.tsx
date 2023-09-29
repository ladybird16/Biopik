import { View, Text } from 'react-native'
import React from 'react'
import FruitChooseItemView from './FruitChooseItemView'

const FruitChooseItem = ({navigation,route}:FruitChooseItemProps) => {
  return (
    <View>
      <FruitChooseItemView navigation={navigation}/>
    </View>
  )
}

export default FruitChooseItem
interface FruitChooseItemProps{
  navigation?: any;
  route?: any;
}