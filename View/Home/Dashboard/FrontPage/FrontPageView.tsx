import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import VegChooseBox from '../VegChooseBox'
import FruitChooseBox from '../FruitChooseBox'

const FrontPageView = ({navigation}:FrontPageViewProps) => {
  return (
    <View>
      <View style={{flexDirection:'row'}}>

<TouchableOpacity onPress={()=>navigation.navigate('FruitChooseBox')}>
<View style={styles.button}>
  <Text>Go To Fruit Box</Text>
</View>
</TouchableOpacity>

<TouchableOpacity onPress={()=>navigation.navigate('VegChooseBox')}>
<View style={styles.button}>
  <Text>Go To Veg Box</Text>
</View>
</TouchableOpacity>

</View>
    </View>
  )
}

export default FrontPageView
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#68d96f',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    // borderColor: 'orange',
    // borderWidth: 1.5,
    elevation:5,
    // width:70
  },
});
interface FrontPageViewProps{
  navigation?: any;
}