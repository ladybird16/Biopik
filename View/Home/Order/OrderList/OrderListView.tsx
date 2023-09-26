import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const OrderListView = () => {
  return (
    <View>
      <TouchableOpacity>
      <View style={styles.list}>
        <Text style={styles.productName}> Product name</Text>        
        <Text style={styles.weight}> Order ID:</Text>        
        <Text style={styles.weight}> Delivery Expected By:</Text>        

        <Image
              source={{
                uri:
                  'https://media.istockphoto.com/id/160356158/photo/fruits-and-veggies-in-wood-box-with-white-backdrop.jpg?s=612x612&w=0&k=20&c=WMWJuSBYbXtk7gfGCb3FkI2Eycd_2TkwQv8W34rUAQY=',
              }}
              style={styles.image}
            />
      </View>
      </TouchableOpacity>
    </View>
  )
}

export default OrderListView

const styles = StyleSheet.create({
  list: {
    backgroundColor:'white',
    borderBlockColor:'green',
    margin: 20,
    borderColor: 'green',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,

  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginTop: 20,
  },
  productName: { 
    fontWeight: 'bold',
    marginLeft:90,
    fontSize:25,
    
  },
  weight: { 
    fontWeight: 'bold',
    marginLeft:90,
    fontSize:15,
   
  },
});
