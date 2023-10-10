import { View, Text, TouchableOpacity, Image, Button } from 'react-native'
import React from 'react'

const FruitChooseBoxView = ({}:FruitChooseBoxViewProps) => {
  return (
    <View style={{ marginTop:10,marginLeft:20,marginRight:20, borderRadius:10,elevation: 10,backgroundColor: '#8eb89c',marginBottom:50,}}>
              {/* <TouchableOpacity onPress={() =>navigation.navigate('FruitChooseItem')}> */}
              {/* {product_id:item.product_id} */}
                <View style={{flexDirection:'row'}}>
                  <View >
                  <Image
                 source={{uri: 'https://cdn2.iconfinder.com/data/icons/shopping-378/100/shopping-cart-full-shopping-carts-goods-bag-box-product-512.png'}}
                 style={{width: 150, height: 150, resizeMode: 'contain', }}
                 />
                 </View>
                  <View style={{flexDirection: 'column',marginTop:30}}>
                  <View style={{}}>
                  <Text style={{fontSize:20 , fontWeight:'bold', textAlign:'right',paddingRight:12,marginTop:30}}>Dragon Fruit Box</Text>
                  </View>
                  <View style={{}}>
                  <Text style={{fontSize:15 , textAlign:'right',paddingRight:12}}>Choose Item upto: 20 </Text>
                  </View>
                </View>
                </View>
                <View style={{paddingBottom:2,elevation:25}}>
                <Button title="Choose Item" color="#698673"/>
                {/* <TouchableOpacity onPress={() => navigation.navigate('ChooseItem')}>
                  <Animatable.Text transition="fontSize" style={{fontSize: 30}}>Choose Item</Animatable.Text> 
                  </TouchableOpacity> */}                
                
                </View>
              {/* </TouchableOpacity>  */}
            </View>

           
  )
}

export default FruitChooseBoxView
interface FruitChooseBoxViewProps{
  navigation?: any;
  route?: any;
}