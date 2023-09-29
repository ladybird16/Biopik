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

  return (
    <View>
      <SafeAreaView>
        <View style={styles.header}>
          <Text style={styles.headerText}>Welcome, {customerName}</Text>
        </View>
        <View style={{flex: 1, height: 100, width: 100, marginTop: 10}}>
          <View
            style={{
              height: height / 3,
              width: width,
              
            }}>
              {/* <FlatList
            data={placeholders}
            horizontal
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={true}
          /> */}
          <SliderBox/>
            </View>
        </View>
      </SafeAreaView>
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
});

export default FrontPageView;
