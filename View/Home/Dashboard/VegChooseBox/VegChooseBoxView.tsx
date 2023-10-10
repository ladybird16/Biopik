import { View, Text, ScrollView, Button, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const VegChooseBoxView = ({navigation,route}:VegChooseBoxProps) => {
  const product=[
    {
      product_name:'Large Box',
      product_id:1,
      max_allowed_items:'22'
    },
    {
      product_name:'Medium Box',
      product_id:2,
      max_allowed_items:'13'
    },
    {
      product_name:'Small Box',
      product_id:3,
      max_allowed_items:'10'
    }
  ]
  return (
    <View >
    <ScrollView style={{paddingBottom:600}}>

    {product.map((item:any,index:any)=>
    <ProductBox navigation={navigation} item={item} key={index} />

    )}   
      </ScrollView>
      </View>
  )
}


export default VegChooseBoxView
interface VegChooseBoxProps{
  navigation?: any;
  route?: any;
}

const ProductBox =({navigation,route,item}: ProductBoxporps)=>{ 
  
  return( 
      <View style={{ marginTop:10,marginLeft:20,marginRight:20, borderRadius:10,elevation: 10,
              backgroundColor: '#8eb89c',marginBottom:50,}}>
              <TouchableOpacity onPress={() =>navigation.navigate('ChooseItem',{product_id:item.product_id})}>
                <View style={{flexDirection:'row'}}>
                  <View >
                  <Image
                 source={{uri: 'https://cdn2.iconfinder.com/data/icons/shopping-378/100/shopping-cart-full-shopping-carts-goods-bag-box-product-512.png'}}
                 style={{width: 150, height: 150, resizeMode: 'contain', }}
                 />
                 </View>
                  <View style={{flexDirection: 'column',marginTop:30}}>
                  <View style={{}}>
                  <Text style={{fontSize:20 , fontWeight:'bold', textAlign:'right',paddingRight:12,marginTop:30}}>{item.product_name}</Text>
                  </View>
                  <View style={{}}>
                  <Text style={{fontSize:15 , textAlign:'right',paddingRight:12}}>Choose Item upto: {item.max_allowed_items}</Text>
                  </View>
                </View>
                </View>
                <View style={{paddingBottom:2,elevation:25}}>
                <Button title="Choose Item" color="#698673"/>
                {/* <TouchableOpacity onPress={() => navigation.navigate('ChooseItem')}>
                  <Animatable.Text transition="fontSize" style={{fontSize: 30}}>Choose Item</Animatable.Text> 
                  </TouchableOpacity> */}                
                
                </View>
              </TouchableOpacity> 
            </View>
           
  )
}

interface ProductBoxporps{
  navigation?: any;
  item?:any;
  product?:any;
  route?:any;
}