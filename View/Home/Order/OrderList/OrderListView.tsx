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

const {width, height} = Dimensions.get('window');
const labels = [
  'Ordered ',
  'Approved',
  'Picked',
  'Out of Delivery',
  'Delivered',
];

const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#fe7013',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#fe7013',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#fe7013',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#fe7013',
};

const OrderListView = () => {
  const [currentPosition, setCurrentPosition] = useState(0);

 

  // useEffect(() => {
  //   // Fetch data from the API
  //   fetch('https://mocki.io/v1/62a6da43-7d6f-4122-93e4-f2d6add1dc42')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setVegetableData(data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, []);

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
      image:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fshop.organicmandya.com%2Fproducts%2Fcarrot-ooty-raw&psig=AOvVaw3TNm7e5FLCOgwoqgvdqzgR&ust=1695986679972000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLCXtO6YzYEDFQAAAAAdAAAAABAE',
    },
    {
      id: 2,
      name: 'TOMATO',
      image:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FTomato&psig=AOvVaw2Ps9ZihrRMaxRH4Q8gpRww&ust=1695986722766000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNjbzIKZzYEDFQAAAAAdAAAAABAE',
    },
    {
      id: 3,
      name: 'CUCUMBER',
      image:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.in%2FFresh-Cucumber-500g-Pack%2Fdp%2FB07BG7B7WB&psig=AOvVaw2YFFFj1-FLINg4voEiSqgK&ust=1695986747995000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMCDyI6ZzYEDFQAAAAAdAAAAABAE',
    },
    {
      id: 4,
      name: 'BROCCOLI',
      image:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Forganicbazar.net%2Fproduct%2Fbroccoli-seeds-hybrid%2F&psig=AOvVaw1R-hnk_FIxPNQa9CohqzLR&ust=1695986792964000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOCohKSZzYEDFQAAAAAdAAAAABAK',
    },
    {
      id: 5,
      name: 'SPINACH',
      image:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fsahajaaharam.com%2Fleafy-vegetables%2Fpalak-fetma&psig=AOvVaw3MouclKTRyN2D0onl_rWin&ust=1695986911112000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPif_d2ZzYEDFQAAAAAdAAAAABAE',
    },
    {
      id: 6,
      name: 'RED AMARANTHUS',
      image:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.goodfoodtoall.com%2Fproduct%2Famaranthus-red-green-seeds%2F&psig=AOvVaw3wjKYYjYiuhw5pbrsv2aaM&ust=1695986952568000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKjho_KZzYEDFQAAAAAdAAAAABAR.jpg',
    },
    {
      id: 7,
      name: 'WATER SPINACH',
      image:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.in%2FPlanthub-Spinach-Kangkong-aquatica-Vegetable%2Fdp%2FB07R6FHD34&psig=AOvVaw0vcEz_4-r-EXMCz5UOGXwr&ust=1695987052872000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJCHiqGazYEDFQAAAAAdAAAAABAE',
    },
    {
      id: 8,
      name: 'CHILLI LIGHT GREEN',
      image:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fgourmetgarden.in%2Fproducts%2Fgarlic&psig=AOvVaw34gmFlJkrLA-mCdpsu-j_R&ust=1695987110668000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMC69ruazYEDFQAAAAAdAAAAABAJ',
    },
    {
      id: 9,
      name: 'PUMPKIN RED',
      image:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kanchiorganicfarms.com%2Fproduct%2Fred-pumpkin%2F&psig=AOvVaw3nQRIdYtr2DF59n_xfbp4Q&ust=1695987179970000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPiMp92azYEDFQAAAAAdAAAAABAJ',
    },
    {
      id: 10,
      name: 'SWEET POTATO',
      image:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Flovepik.com%2Fimage-501118856%2Ffresh-sweet-potatoes.html&psig=AOvVaw1AuYlK1dOmx-d3diHI_7ZS&ust=1695987232079000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJDruvWazYEDFQAAAAAdAAAAABAE',
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

  const renderItem = ({item}) => {
    return (
      <View style={styles.vegetableItemContainer}>
        <Image source={{uri: item.image}} style={styles.vegetableImage} />
        <Text style={styles.vegetableName}>{item.name}</Text>
      </View>
    );
  };
  return (
    
    <ScrollView  style={styles.productlist}>
      <Text style={styles.productName}>My Orders</Text>


      <View>
        <TouchableOpacity onPress={openModal}>
          <View style={styles.list}>
            <Text style={styles.Boxname}> KWS Jumbo Box</Text>
            <Text style={styles.weight}> Order ID:</Text>
            <Text style={styles.weight}> Delivery Expected By:</Text>
            <View style={styles.stepIndi}>
              <StepIndicator
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
              />
            </View>

            <Image
              source={{
                uri: 'https://media.istockphoto.com/id/160356158/photo/fruits-and-veggies-in-wood-box-with-white-backdrop.jpg?s=612x612&w=0&k=20&c=WMWJuSBYbXtk7gfGCb3FkI2Eycd_2TkwQv8W34rUAQY=',
              }}
              style={styles.image}
            />
          </View>
        </TouchableOpacity>

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
              />
            </View>
          </TouchableOpacity>
        </Modal>
      </View>




      <View>
        <TouchableOpacity onPress={openModal}>
          <View style={styles.list}>
            <Text style={styles.Boxname}> KWS Mini Box</Text>
            <Text style={styles.weight}> Order ID:</Text>
            <Text style={styles.weight}> Delivery Expected By:</Text>
            <View style={styles.stepIndi}>
              <StepIndicator
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
              />
            </View>

            <Image
              source={{
                uri: 'https://media.istockphoto.com/id/160356158/photo/fruits-and-veggies-in-wood-box-with-white-backdrop.jpg?s=612x612&w=0&k=20&c=WMWJuSBYbXtk7gfGCb3FkI2Eycd_2TkwQv8W34rUAQY=',
              }}
              style={styles.image}
            />
          </View>
        </TouchableOpacity>

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
              />
            </View>
          </TouchableOpacity>
        </Modal>
      </View>




    </ScrollView>
  );
};

export default OrderListView;

const styles = StyleSheet.create({
  list: {
    backgroundColor: 'white',
    borderBlockColor: 'green',
    marginHorizontal: 20,
    marginVertical:5,
    borderColor: 'green',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
 
  },
  image: {
    width: 300,
    height: 150,
    resizeMode: 'contain',
    marginTop: 10,
  },
  stepIndi: {
    marginTop: 20,
  },
  productName: {
    fontWeight: 'bold',
    marginLeft: 110,
    fontSize: 30,
    color: 'white',
  },
  Boxname: {
    fontWeight: 'bold',
    marginLeft: 85,
    fontSize: 25,
    color: 'green',
  },
  weight: {
    fontWeight: 'bold',
    marginLeft: 90,
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
    backgroundColor: '#42f5a7',
    borderBlockColor: 'green',
    borderColor: 'green',
    borderWidth: 1,
    padding: 10,
    paddingBottom:20
  
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
