import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  Modal,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import OrderDetailsView from '../OrderDetails/OrderDetailsView';

const {width, height} = Dimensions.get('window');
const labels = [
  'Ordered ',
  'Approved',
  'Picked',
  'Out of Delivery',
  'Delivered',
];


const OrderListView = ({navigation}:OrderListViewProps) => {
  const [currentPosition, setCurrentPosition] = useState(0);

 

 
  const [isModalVisible, setModalVisible] = useState(false);


  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const renderItem = ({item}:any) => {
    return (
      <View style={styles.vegetableItemContainer}>
        <Image source={{uri: item.image}} style={styles.vegetableImage} />
        <Text style={styles.vegetableName}>{item.name}</Text>
      </View>
    );
  };
  return (
    <View  style={styles.container}>
    <ScrollView style={styles.productlist} >
      <Text style={styles.productName}>My Orders</Text>


      <View>
        <TouchableOpacity onPress={()=> navigation.navigate('OrderDetail')}>
          <View style={styles.list}>
            <Text style={styles.Boxname}> KWS Jumbo Box</Text>
            <Text style={styles.weight}> Order ID:1</Text>
            <Text style={styles.weight}> Delivery on:05/10/2023</Text>
            <View style={styles.stepIndi}>
          
            </View>

            <Image
              source={{
                uri: 'https://media.istockphoto.com/id/160356158/photo/fruits-and-veggies-in-wood-box-with-white-backdrop.jpg?s=612x612&w=0&k=20&c=WMWJuSBYbXtk7gfGCb3FkI2Eycd_2TkwQv8W34rUAQY=',
              }}
              style={styles.image}
            />
          </View>
        </TouchableOpacity>

      </View>





      <View>
        <TouchableOpacity onPress={()=> navigation.navigate('OrderDetail')}>
          <View style={styles.list}>
            <Text style={styles.Boxname}> KWS Mini Box</Text>
            <Text style={styles.weight}> Order ID:2</Text>
            <Text style={styles.weight}> Delivery on:05/10/2023</Text>
            <View style={styles.stepIndi}>
              
            </View>

            <Image
              source={{
                uri: 'https://media.istockphoto.com/id/160356158/photo/fruits-and-veggies-in-wood-box-with-white-backdrop.jpg?s=612x612&w=0&k=20&c=WMWJuSBYbXtk7gfGCb3FkI2Eycd_2TkwQv8W34rUAQY=',
              }}
              style={styles.image}
            />
          </View>
        </TouchableOpacity>

       
      </View>




     




    </ScrollView>
    </View>
  );
};

export default OrderListView;

const styles = StyleSheet.create({
  container: {
    flex: 0,
   
  },
  list: {
    backgroundColor: 'white',
    borderBlockColor: 'green',
    marginHorizontal: 2,
    marginVertical:5,
    borderColor: 'green',
    borderWidth: 1,
    padding: 0,
    borderRadius: 10,
    
 
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginTop: -100,
  },
  stepIndi: {
    marginTop: 20,
  },
  productName: {
    //fontWeight: 'bold',
    marginLeft: 110,
    fontSize: 25,
    color: 'black',
  
  },
  Boxname: {
    fontWeight: 'bold',
    marginLeft: 100,
    fontSize: 25,
    color: 'green',
  },
  weight: {
    fontWeight: 'bold',
    marginLeft: 100,
    fontSize: 15,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'red',
  },
  vegetableItem: {
    fontSize: 18,
    marginBottom: 10,
  },
  closeButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  productlist: {
    backgroundColor: 'white',
    
    borderBlockColor: 'green',
    borderColor: 'green',
   // borderWidth: 1,
    padding: 10,
    paddingBottom:1000,
    marginBottom:10,
    // borderRadius: 10,
  },
  lblContainer: {
    marginTop: 30,
    padding: 10,
    paddingLeft: 5,
    width: width - 100,
  },
  lblText: {
    fontSize: 17,
    color: '#fff',
    fontWeight: 'bold',
  },
  status: {
    fontSize: 15,
    color: 'gray',
  },
  vegetableItemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  vegetableImage: {
    width: 25,
    height: 25,
    marginRight: 10,
    marginLeft: 0,
    borderRadius: 10, // To make it a circular image
  },
  vegetableName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});


interface OrderListViewProps{
  navigation?:any;
 
}
