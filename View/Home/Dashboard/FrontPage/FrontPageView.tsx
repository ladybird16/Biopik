import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';

const {height, width} = Dimensions.get('window');
const FrontPageView = () => {
  const customerName = 'Arijit';
  // const placeholders = [
  //   require('../images/banner1.png'), 2, 3, 4];
  // const renderItem = ({ item }:any) => (
  //   <View style={styles.imageContainer}>
  //     {/* Grey placeholder view */}
  //     <View style={styles.placeholder}></View>
  //   </View>
  // );
  const images =[
    require('../images/banner1.png'),
  ]

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import VegChooseBox from '../VegChooseBox'
import FruitChooseBox from '../FruitChooseBox'

const FrontPageView = ({navigation}:FrontPageViewProps) => {
  return (
    <View>
      <Text>FrontPageView</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'rgba(23, 179, 68, 0.8)',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(13, 137, 31, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 5,
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  blueContainer: {
    height: height / 3,
    width: width,
    backgroundColor: 'blue',
  },
  imageContainer: {
    width: width - 40,
    height: height / 3,
    marginHorizontal: 10,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: 'green',
    overflow: 'hidden',
  },
  placeholder: {
    flex: 1,
    backgroundColor: 'gray', // Placeholder color (grey)
  },
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

export default FrontPageView;

interface FrontPageViewProps{
  navigation?: any;
}