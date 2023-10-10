import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-vector-icons/Icon'


const ProfileMainView = ({navigation}:ProfileMainViewProps) => {


     
  return (
  <View>
    <View style={{ backgroundColor: '#17b344', height: 50, elevation: 5 }}>
        <Text style={{textAlign:'center',fontSize:30,color:'white',fontWeight:'bold',}}>Profile</Text> 
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
      <TouchableOpacity onPress={() => navigation.navigate('EditProfile')} style={{marginTop:40,backgroundColor: '#cef5a9',height:70,width:'95%', margin:10,borderRadius:10,elevation: 5}} >
             <View style={{flexDirection:'row',paddingHorizontal:20,paddingVertical:20,}}>
             {/* <Icon name="create-outline" size={(25)} /> */}
             <Text style={{fontSize:20, marginLeft:10}}>Edit Your Profile</Text>
             </View>
      </TouchableOpacity>
   
     </View> 
 
     </View>
  )
}

export default ProfileMainView
interface ProfileMainViewProps{
    navigation?: any;
  }