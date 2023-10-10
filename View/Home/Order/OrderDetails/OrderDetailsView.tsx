import React, {useState} from 'react';
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

const {width, height} = Dimensions.get('window');
const labels = [
  'Ordered ',
  'Approved',
  'Picked',
  'Out of Delivery',
  'Delivered',
];



const OrderDetailsView = ({navigation}:OrderDetailsViewProps) => {
  const [currentPosition, setCurrentPosition] = useState(0);

  const data = [
    {
      label: 'Ordered And Approved',
      status: 'Your order has been placed.',
      dateTime: 'Sun, 24th Sep',
    },
    {
      label: 'Picked',
      status: 'Your item has been picked.',
      dateTime: 'Mon, 25th Sep',
    },
    {
      label: 'Out of Delivery',
      status: 'Your item is out of delivery.',
      dateTime: 'Tus, 26th Sep',
    },
    {
      label: 'Delivered',
      status: 'Your itemhas been delivered.',
      dateTime: 'Tus, 26th Sep',
    },
  ];

  const [isModalVisible, setModalVisible] = useState(false);
  const [vegetableData, setVegetableData] = useState([
    {
      id: 1,
      name: 'CARROT',
      Quantity: 250,
      price: 50,
      image:
        'https://media.istockphoto.com/id/176870966/photo/carrots.jpg?s=1024x1024&w=is&k=20&c=--kYhjm8NL2vm5TZf9U6LthdsVguB2D13HRgJu0WT9c=',
    },
    {
      id: 2,
      name: 'TOMATO',
      Quantity: 250,
      price: 50,
      image:
        'https://media.istockphoto.com/id/1043572776/photo/tomato-isolated.jpg?s=1024x1024&w=is&k=20&c=bomhnS72MUyXzcmgiNBilf3hngRR30_l52zkSD3xQHE=',
    },

    {
      id: 3,
      name: 'CUCUMBER',
      Quantity: 250,
      price: 50,
      image:
        'https://media.istockphoto.com/id/875262784/photo/cucumber-isolated-on-the-white-background.jpg?s=1024x1024&w=is&k=20&c=W814RPE26lSwsO7gCypL39IvBPKQ4S1NSAE1fZTB8HE=',
    },
    {
      id: 4,
      name: 'BROCCOLI',
      Quantity: 250,
      price: 50,
      image:
        'https://media.istockphoto.com/id/183300149/photo/broccoli.jpg?s=1024x1024&w=is&k=20&c=dZBLhXwBa1H-LnXy6Y6gE1dpAnVjlDdIR8LOx8-xUHs=',
    },
    {
      id: 5,
      name: 'SPINACH',
      Quantity: 250,
      price: 50,
      image:
        'https://media.istockphoto.com/id/1006196472/photo/bunch-of-spinach-leaves-on-isolated-white-background.jpg?s=1024x1024&w=is&k=20&c=pwMLcM6psDHTkYKPVtyUhrn38H_DIS_l8QrQWjKxbaY=',
    },
    {
      id: 6,
      name: 'RED AMARANTHUS',
      Quantity: 250,
      price: 50,
      image:
        'https://media.istockphoto.com/id/643530162/photo/red-leaf-vegetable-amaranth-on-white-background.jpg?s=1024x1024&w=is&k=20&c=Tq2yqGm5bZSgJjgJOKF2yRntjVbsSHLhcUYKb9gPJTY=',
    },
    {
      id: 7,
      name: 'WATER SPINACH',
      Quantity: 250,
      price: 50,
      image:
        'https://media.istockphoto.com/id/1332459470/photo/ipomoea-aquatica-leafy-vegetable-growing-in-summer-vegetable-garden.jpg?s=612x612&w=is&k=20&c=KYx74tGnmQ8XSjM-skn5WrydkdAg6stkhItD8vJbfZk=',
    },
    {
      id: 8,
      name: 'CHILLI',
      Quantity: 250,
      price: 50,
      image:
        'https://media.istockphoto.com/id/865680246/photo/chili-isolated-on-white-background.jpg?s=612x612&w=is&k=20&c=46TzVRmJlpTEtQ7Zytz-y2O4wcIg-iYDEWnXRTclxD4=',
    },
    {
      id: 9,
      name: 'PUMPKIN ',
      Quantity: 250,
      price: 50,
      image:
        'https://media.istockphoto.com/id/1041944478/photo/pumpkin.jpg?s=612x612&w=is&k=20&c=tVG2acFnEn8tJKjmklI-Oc-0Al9CM4ueOxC9UZJVk4M=',
    },
    {
      id: 10,
      name: 'SWEET POTATO',
      Quantity: 250,
      price: 50,
      image:
        'https://media.istockphoto.com/id/1403981489/photo/raw-whole-red-sweet-potato-related-to-vegetable-farm-kitchen-cooking-carbohydrate-nutrition.jpg?s=1024x1024&w=is&k=20&c=QE-U-9VuNpXFAhXHjwUlXFFHHANIdFzct1GH_DRDEX0=',
    },
  ]);
  // const [vegtableData, setVegtableData] = useState([
  //   { id: 6, name: 'RED AMARANTHUS ' },
  //   { id: 7, name: 'WATER SPINACH' },
  //   { id: 8, name: 'CHILLI LIGHT GREEN' },
  //   { id: 9, name: 'PUMPKIN RED' },
  //   { id: 10, name: 'SWEET POTATO' },
  // ]);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const renderItem = ({item}: any) => {
    return (
      <View>
        <View style={styles.vegetableItemContainer}>
          <Image source={{uri: item.image}} style={styles.image} />
          <Text style={styles.vegetableName}>{item.name}</Text>
          <Text style={{...styles.vegetableQ, marginBottom: -2, marginLeft: 5}}>
            Quantity:{item.Quantity}
          </Text>
          {/* <Text style={{...styles.vegetablePrice, marginBottom: -60,marginLeft:-70 }}>Price:{item.price}</Text>  */}
        </View>
        <View style={styles.separator} />
      </View>
    );
  };
  const renderpic = ({item}: any) => {
    return (
      <View style={styles.vegetableItemContainer}>
        <Image source={{uri: item.image}} style={styles.image} />
                      </View>
     
    );
  };
  return (
    <ScrollView style={styles.productlist}>
      <Text style={styles.productName}>Order Details</Text>

      <View>
        <View style={styles.list}>
          <Text style={styles.Boxname}> KWS Jumbo Box</Text>

          <Text style={styles.weight}> Order ID:1</Text>
          <Text style={styles.weight}> Delivery On:Oct 10,2023</Text>
          <Text onPress={openModal} style={styles.productView}>
            View All
          </Text>
          
            
            <View style={styles.sc_container}>


              <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false}>
                
                    {vegetableData.map(vegetable => (
                    <View
                      key={vegetable.id}
                      style={styles.sc_vegetableItemContainer}>
                      <Image
                        source={{uri: vegetable.image}}
                        style={styles.sc_image}
                      />
                    </View>
                  ))}
                
              </ScrollView>
            </View>

            {/* <StepIndicator
                customStyles={customStyles}
                currentPosition={currentPosition}
                labels={labels}
                //direction="vertical"
                // renderLabel={({position,stepStatus,label,currentPosition})=>{
                //   return(
                //     <View  style={styles.lblContainer}>
                //       <Text style={styles.lblText}>{data[position].label}</Text>
                //       <Text style={styles.status}>{data[position].status}</Text>
                //       <Text style={styles.status}>{data[position].dateTime}</Text>
                //       </View>
                //   )
                // }}
              /> */}
          
          <View>
            <Text style={{color: 'blue',marginTop:10}}> Shipping Details</Text>
            <View style={styles.SH_separator} />
            <Text style={styles.per_name}> Sujata De</Text>
            <Text style={styles.per_address}> School Bazar, Bibiganj</Text>
            <Text style={styles.per_address}> Paschim Midnapore</Text>
            <Text style={styles.per_address}> West bengal - 721101</Text>
            <Text style={styles.per_address}> Phone Number: 8207096382</Text>
          </View>
          <View>
            <Text style={{color: 'blue', marginTop: 10}}>Price Details</Text>
            <View style={styles.price_separator} />
            <Text style={styles.per_address}> List price</Text>
            <Text style={styles.rate}> 550</Text>
            <Text style={styles.per_address}> Selling price       </Text>
            <Text style={styles.rate}> 500</Text>
            <Text style={styles.per_address}> Discount </Text>
            <Text style={styles.rate}> 10% </Text>
            <Text style={styles.per_address}> Total Amount </Text>
            <Text style={styles.rate}> 500 </Text>
          </View>
          <TouchableOpacity>
  <Text onPress={() => navigation.navigate('OrderList')} style={styles.reorder}>
    Re-Order
  </Text>
</TouchableOpacity>
          {/* <Image
              source={{
                uri: 'https://media.istockphoto.com/id/160356158/photo/fruits-and-veggies-in-wood-box-with-white-backdrop.jpg?s=612x612&w=0&k=20&c=WMWJuSBYbXtk7gfGCb3FkI2Eycd_2TkwQv8W34rUAQY=',
              }}
              style={styles.image}
            /> */}
        </View>

        <Modal visible={isModalVisible} transparent animationType="slide">
          <TouchableOpacity
            style={styles.modalContainer}
            activeOpacity={1} // Prevents the modal from closing immediately on touch
            onPress={closeModal}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Vegetable List</Text>
              <FlatList
                data={vegetableData}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                showsVerticalScrollIndicator={false}
              />
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
    </ScrollView>
  );
};

export default OrderDetailsView;

const styles = StyleSheet.create({
  list: {
    backgroundColor: 'white',
    borderBlockColor: 'green',
    marginHorizontal: 5,
    marginVertical: 5,
    borderColor: 'green',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginTop: 10,
  },
  imageContainer: {
    margin: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },
  stepIndi: {
    marginTop: 20,
  },
  productName: {
    //fontWeight: 'bold',
    marginLeft: 110,
    fontSize: 30,
    color: 'black',
  },
  Boxname: {
    fontWeight: 'bold',
    marginLeft: 5,
    fontSize: 25,
    color: 'green',
  },
  weight: {
    fontWeight: 'bold',
    marginLeft: 10,
    fontSize: 15,
  },
  per_name: {
    //fontWeight: 'bold',
    marginLeft: 0,
    fontSize: 20,
  },
  per_address: {
    //fontWeight: 'bold',
    marginLeft: 0,
    fontSize: 15,
  },
  rate: {
    //fontWeight: 'bold',
    marginLeft: 300,
    fontSize: 15,
    marginTop:-15
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
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'green',
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
    // borderColor: 'green',
    borderWidth: 1,

    paddingBottom: 1000,

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
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  imagep: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginTop: -100,
  },
  separator: {
    height: 1,
    backgroundColor: 'gray', // You can change this color to your preference
    marginLeft: -50, // Adjust this value for spacing
    marginRight: -50,
  },
  SH_separator: {
    height: 1,
    backgroundColor: 'blue', // You can change this color to your preference
    marginLeft: 2, // Adjust this value for spacing
    marginRight: 250,
  },
  price_separator: {
    height: 1,
    backgroundColor: 'blue', // You can change this color to your preference
    marginLeft: 0, // Adjust this value for spacing
    marginRight: 275,
  },
  vegetableImage: {
    width: 25,
    height: 25,
    marginRight: 10,
    marginLeft: 0,
    borderRadius: 10, // To make it a circular image
    flex: 1,
  },
  vegetableName: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  vegetableQ: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'gray',
    marginBottom: 5,
  },
  vegetablePrice: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'gray',
    marginBottom: 5,
  },
  productView: {
    color: 'blue',
    marginLeft: 280,
    borderColor: 'blue',
    borderWidth: 1,
    padding: 1,
    paddingRight: 0,
    paddingLeft: 12,
    borderRadius: 1,
    marginTop: -25,
  },
  reorder: {
   color:'white',
   fontSize:20,
    marginLeft: 260,
    //borderColor: 'blue',
    borderWidth: 2,
    padding: 1,
    paddingRight: 0,
    paddingLeft: 12,
    borderRadius: 1,
    marginTop: 10,
    backgroundColor:'green'
  },

  fl_container: {
    flex: 1,
    width: '100%',
  },

  sc_container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row' ,
    width:'100%'// Set the background color if needed
  },
  sc_list: {
    flexDirection: 'row',
    width: '100%', // Ensure the container takes the full width
  },
  sc_vegetableItemContainer: {
    marginRight: 10,
  },
  sc_image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginTop: 10,
  },
});

interface OrderDetailsViewProps {
  navigation?: any;
}
