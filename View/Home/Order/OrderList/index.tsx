import { View, Text } from 'react-native'
import React from 'react'
import OrderDetailView from './OrderListView'
import StepIndicator from 'react-native-step-indicator';
 

const OrderList = () => {

  return (
    <View>
      <OrderDetailView/>
    </View>
  )
}

export default OrderList