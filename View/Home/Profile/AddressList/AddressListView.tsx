import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import { Menu, MenuOption, MenuOptions, MenuTrigger } from 'react-native-popup-menu';

const AddressListView = ({ navigation }: AddressListViewProps) => {
  const [address, updateAddress] = useState<any>([]);
  
  

  useEffect(()=>{
    try{
      axios.get('https://mocki.io/v1/317cecd1-c55d-4199-a66b-4b8b3f2fb6c2').then((response: { data: any; })=>{
        updateAddress(response.data);
      }).catch((err:any)=>{
        console.log(err);
      })
    }catch(err){
      console.log(err);
    }
  },[])

  return (
    <View style={{backgroundColor:'#75c22d',height:60}}>
      <View style={{ flexDirection: 'row', marginLeft: 10, marginTop:10}}>
        <TouchableOpacity onPress={() => navigation.navigate('ProfileMain')}>
          <Icon name="arrow-back-outline" size={30} color={'white'} />
        </TouchableOpacity>
        <Text style={{ color: 'white', fontSize: 25, textAlign: 'center', marginLeft: 40 }}>
          Manage Your Address
        </Text>
      </View>

      <ScrollView style={{ paddingBottom:700,marginBottom:50}}> 
        <View
          style={{
            elevation: 10,
            backgroundColor: '#fff',
            // borderRadius: 10,
            height: 50,
            // margin: 20,
            marginTop: 20,
            paddingVertical: 10,
            paddingHorizontal: 10,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('AddressAdd')}>
            <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', color:'#75c22d' }}>+Add Address</Text>
          </TouchableOpacity>
        </View>
            {
          address.map((m:any)=> (
            <AddressNew key={m.house_no} item={m}/>
          ))
        }
      </ScrollView>
    </View>
  );
};

export default AddressListView;

interface AddressListViewProps {
  navigation?: any;
  address?: any;
}
  

  const AddressNew = ({ item,navigation }: AddressNewProps) => {

    return (
   
      <View
      style={{
        elevation: 5,
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 10,
        paddingVertical: 20,
        paddingHorizontal: 15,
      }}>
      
      <Menu style={{ position: 'absolute', top: 10, right: 10 }}>
          <MenuTrigger>
            <Icon name="ellipsis-vertical-outline" size={20} color="#75c22d" />
          </MenuTrigger>
          <MenuOptions optionsContainerStyle={popupStyles.optionsContainer}>
            <MenuOption onSelect={() => navigation.navigate('AddressEdit')}>
              <Text style={styles.menuText}>Edit</Text>
            </MenuOption>
            <MenuOption>
              <Text style={styles.menuText}>Remove</Text>
            </MenuOption>
          </MenuOptions>
        </Menu>
          {/* <View>
            <Text style={{ fontWeight: '500', fontSize: 18 }}>{item.house_no}, {item.Society},</Text>
            <Text style={{ fontWeight: '500', fontSize: 18 }}>{item.Block}, {item.City}, {item.State},</Text>
            <Text style={{ fontWeight: '500', fontSize: 18 }}>{item.Pin} </Text>
          </View> */}

          <View>
            <Text style={{ fontWeight: '500', fontSize: 18 }}>House No: {item.house_no}</Text>
          </View>
          <View>
            <Text style={{ fontWeight: '500', fontSize: 18 }}>Society Name: {item.Society}</Text>
          </View>
          <View>
            <Text style={{ fontWeight: '500', fontSize: 18 }}>Address: {item.Address}</Text>
          </View>
          <View>
            <Text style={{ fontWeight: '500', fontSize: 18 }}>City : {item.City}</Text>
          </View>
          <View>
            <Text style={{ fontWeight: '500', fontSize: 18 }}>State : {item.State}</Text>
          </View>
          <View>
            <Text style={{ fontWeight: '500', fontSize: 18 }}>Country : {item.Country}</Text>
          </View>
          <View>
            <Text style={{ fontWeight: '500', fontSize: 18 }}>Pincode : {item.Pin}</Text>
          </View>
         </View>
      
    );
  };
  const popupStyles = {
    optionsContainer: {
      backgroundColor: 'white', 
      borderRadius: 5, 
      padding: 10, 
      width: 150, 
  
      
    },
    
    optionText: {
      fontSize: 16, 
      color: 'black', 
      paddingVertical: 10, 
      paddingHorizontal: 20,
    },
  };

   const styles = StyleSheet.create({
  //   button: {
  //     width: '30%', 
  //     height: 30, 
  //     backgroundColor: '#fa8b0c', 
  //     borderRadius: 20
    
  //   },
  //   buttonText: {
  //     color: 'white',
  //     textAlign: 'center',
  //   },
  //   modalContainer: {
  //     flex: 1,
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     backgroundColor: 'rgba(0, 0, 0, 0.5)',
  //   },
  //   modalContent: {
  //     backgroundColor: 'white',
  //     padding: 30,
  //     borderRadius: 10,
  //     alignItems: 'center',
  //   },
  //   modalButtons: {
  //     flexDirection: 'row',
  //     marginTop: 20,
  //   },
  //   modalButton: {
  //     paddingVertical: 10,
  //     paddingHorizontal: 20,
  //     borderRadius: 25,
  //     marginHorizontal: 10,
  //   },
  //   cancelButton: {
  //     backgroundColor: 'gray',
  //   },
  //   confirmButton: {
  //     backgroundColor: '#fa8b0c',
  //   },
  //   modalButtonText: {
  //     color: 'white',
  //   },
    menuText: {
      fontSize: 16,
      color: '#75c22d',
    },

   
  });

  interface AddressNewProps{ 
    navigation?:any;
    item?:any;
    AddressDelete?: any;
 
  }
  
