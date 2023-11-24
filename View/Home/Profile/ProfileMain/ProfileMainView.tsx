import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import { ScrollView } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons';


const ProfileMainView = ({navigation}:ProfileMainViewProps) => {


     
  return (
    <ScrollView style={{paddingBottom:10,marginBottom:10}}>
  <View>
    <View style={{ backgroundColor: '#75c22d', height: 60, elevation: 5 }}>
        <Text style={{textAlign:'center',fontSize:30,color:'white',fontWeight:'bold',marginTop:5}}>Profile</Text> 
    </View>
     <View
     style={{
       elevation: 10,
       backgroundColor: 'white',
       borderRadius: 10,
       margin: 10,
       marginTop: 20,
       paddingVertical: 20,
       //paddingHorizontal: 15,
     }}>
       <Text
       style={{
         fontSize: 25,
         fontWeight: 'bold',
         color: 'black',
         textAlign: 'center',
       }}>
        Krishna Guha
       {/* {user?.customer_name} */}
     </Text>
     <Text
     style={{
       fontSize: 15,
       color: 'black',
       textAlign: 'center'}}>
        9876543210
       {/* {user?.customer_phone} */}
       </Text>
       <TouchableOpacity onPress={() => navigation.navigate('EditProfile')} style={{marginTop: 70, backgroundColor: '#cef5a9', height: 70, width: '95%', margin: 10, borderRadius: 10, elevation: 5}}>
  <View style={{flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 20}}>
    <Icon name="create-outline" size={25} />
    <Text style={{fontSize: 20, marginLeft: 10}}>Edit Your Profile</Text>
  </View>
  </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('AddressList')} style={{marginTop:10,backgroundColor: '#cef5a9',height:70,width:'95%', margin:10,borderRadius:10,elevation: 5}} >
          <View style={{flexDirection:'row',paddingHorizontal:20,paddingVertical:20,}}>
          <Icon name="clipboard-outline" size={(25)} />
            <Text style={{fontSize:20, marginLeft:10}}>Address Book</Text>
          </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('OrderList')} style={{marginTop:10,backgroundColor: '#cef5a9',height:70,width:'95%', margin:10,borderRadius:10,elevation: 5}} >
          <View style={{flexDirection:'row',paddingHorizontal:20,paddingVertical:20,}}>
          <Icon name="bag-handle-outline" size={(25)} />
            <Text style={{fontSize:20, marginLeft:10}}>My Orders</Text>
          </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('EditProfile')} style={{marginTop:10,backgroundColor: '#cef5a9',height:70,width:'95%', margin:10,borderRadius:10,elevation: 5}} >
          <View style={{flexDirection:'row',paddingHorizontal:20,paddingVertical:20,}}>
          <Icon name="wallet-outline" size={(25)} />
            <Text style={{fontSize:20, marginLeft:10}}>Payment History</Text>
          </View>
      </TouchableOpacity>
     
   
     </View> 
     <View    style={{
      // elevation: 10,
       backgroundColor: 'white',
       borderRadius: 10,
       margin: 10,
       paddingVertical: 20,
       //paddingHorizontal: 15,
     }}>
     <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}  >
         
             {/* <Icon name="create-outline" size={(25)} /> */}
          <Text style={{fontSize:15, marginLeft:10}}>About Us</Text>
          
      </TouchableOpacity>  
      <TouchableOpacity onPress={() => navigation.navigate('EditProfile')} style={{}} >
        
             {/* <Icon name="create-outline" size={(25)} /> */}
            <Text style={{fontSize:15, marginLeft:10}}>FAQs</Text>
         
      </TouchableOpacity>  
      <TouchableOpacity onPress={() => navigation.navigate('EditProfile')} style={{}} >
        
        {/* <Icon name="create-outline" size={(25)} /> */}
       <Text style={{fontSize:15, marginLeft:10}}>Terms and Conditions</Text>
    
 </TouchableOpacity>  
 </View>
      <TouchableOpacity onPress={() => navigation.navigate('EditProfile')} style={{height:50,width:'95%', margin:10,borderRadius:10,borderWidth:4,borderColor:'#75c22d'}} >
          <View >
             {/* <Icon name="create-outline" size={(25)} /> */}
            <Text style={{textAlign:'center',fontSize:18,color:'#75c22d',marginTop:5,fontWeight:'bold'}}>Log Out</Text>
          </View>
      </TouchableOpacity> 
     </View>
     </ScrollView>
  )
}

export default ProfileMainView
interface ProfileMainViewProps{
    navigation?: any;
  }