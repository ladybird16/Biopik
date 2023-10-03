import { View, Text } from 'react-native'
import React from 'react'
import OrderDetailView from './OrderListView'
import StepIndicator from 'react-native-step-indicator';
import OrderListView from './OrderListView';
 

const OrderList = ({navigation}: OrderListProps) => {

  return (
    <View>
      <OrderListView />
    </View>
  )
}

export default OrderList

interface OrderListProps {
  navigation?: any;
}