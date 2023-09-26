import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import FruitChooseBox from '../FruitChooseBox'
import { TouchableOpacity } from 'react-native-gesture-handler'
import VegChooseBox from '../VegChooseBox'

const FrontPage = ({navigation,route}:FrontPageProps) => {
  return (
    <View>
      <Text>FrontPage</Text>
      <View style={{flexDirection:'row'}}>

      <TouchableOpacity onPress={()=>navigation.navigate('FruitChooseBox')}>
      <View style={styles.button}>
      <FruitChooseBox navigation={navigation}/>
        <Text>Go To Fruit Box</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>navigation.navigate('VegChooseBox')}>
      <View style={styles.button}>
      <VegChooseBox navigation={navigation}/>
        <Text>Go To Fruit Box</Text>
      </View>
      </TouchableOpacity>

      </View>
    </View>
  )
}

export default FrontPage
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
interface FrontPageProps{
  navigation?: any;
  route?: any;
}