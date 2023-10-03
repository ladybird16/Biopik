import { View, Text } from 'react-native'
import React from 'react'

const OrderDetailsView = ({navigation}:OrderDetailsViewProps) => {
  return (
    <View>
      <Text>OrderDetailsView</Text>
    </View>
  )
}

export default OrderDetailsView
interface OrderDetailsViewProps{
    navigation?:any;
   
  }