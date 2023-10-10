import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './Login';
import Signup from './Signup';
import ForgetPass from './Login/ForgetPass';
import AboutUs from './Login/AboutUs';
import Feedback from './Login/Feedback';





const Stack = createStackNavigator();

const LogInSignUp = () => {

  return (
    <Stack.Navigator screenOptions={{headerShown:false}} >
     <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Signup" component={Signup} />
    <Stack.Screen name="ForgetPass" component={ForgetPass} /> 


    </Stack.Navigator>
    // <></>
  )
}

// const Drawer = createDrawerNavigator();

// const Drawer1 = () => {
    
 
      
//       return (
//         <Drawer.Navigator>
//             {/* <Drawer.Navigator initialRouteName="Login"> */}
//             <Drawer.Screen name="About Us" component={AboutUs} />
//             <Drawer.Screen name="Feedback" component={Feedback} />
//           </Drawer.Navigator>
//       );
//     }

export default LogInSignUp