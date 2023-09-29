import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import AboutUs from './Login/AboutUs';
import Login from './Login';
import Feedback from './Login/Feedback';
import Signup from './Signup';
import ForgetPass from './Login/ForgetPass';
import { createStackNavigator } from '@react-navigation/stack';
import LogInSignUp from '.';



const Drawer = createDrawerNavigator();

const Drawer1 = () => {
         
      return (
      
            <>
   
          <Drawer.Navigator screenOptions={{
headerShown:true,
headerStyle:{
backgroundColor:'white',
elevation:0,
shadowOpacity:0,},
}}>
          <Drawer.Screen name=" " component={LogInSignUp} />
            <Drawer.Screen name="About Us" component={AboutUs} />
            <Drawer.Screen name="Feedback" component={Feedback} />
            
          </Drawer.Navigator>
          </>
      );
    }
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      text: {
        fontSize: 20,
      },
      drawer: {
        backgroundColor: 'lightgray', // Background color of the drawer
      },
      drawerLabel: {
        fontSize: 18,
      },
    });
    

export default Drawer1