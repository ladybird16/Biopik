import { View, Text } from 'react-native'
import React from 'react'
import OrderDetailsView from './OrderDetailsView'

const OrderDetail = ({ navigation }: OrderDetailProps) => {
  return (
    <View>
      <OrderDetailsView navigation={navigation} />
    </View>
  )
}

export default OrderDetail

export interface OrderDetailProps{
  navigation?: any;
}