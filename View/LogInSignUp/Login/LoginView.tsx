import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import forgetPass from './ForgetPass';
import { DrawerActions } from '@react-navigation/native';


const LoginView = ({navigation,openDrawer}:LoginViewProps) => {
  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: {errors},
  } = useForm();
  
  return (
    <View style={{backgroundColor:'white',flex:1}}>
      <TouchableOpacity
        // onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
        {/* <Text>Open Drawer</Text> */}
      </TouchableOpacity>
    {/* <View style={{marginTop:5,marginLeft:10}}>
      <Text style={{fontSize:30,fontWeight:'bold'}}>Welcome</Text>
    </View> */}
    {/* <View style={{marginTop:15,marginLeft:10}}>
      <Text style={{fontSize:17}}>Login into your Account</Text></View> */}
      <View style={{marginTop:10,marginLeft:130}}>
          <Image
            source={require('../../../image/logo.png')}
            style={{}}
          />
        </View>
    
    <View style ={{backgroundColor:'#68d96f',
        marginTop:20,
        marginLeft:30,
        marginRight:30,
        borderTopLeftRadius: 50, // Adjust the value to control the radius
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 10}}>
            <View style={{marginTop:20,marginLeft:15}}>
            <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: 'white',
          }}>
          Log In </Text>
        </View>
        
      <Controller
          control={control}
          rules={{
            required: true,
            maxLength: 10,
            minLength: 10,
            pattern: /^(\+\d{1,3}[- ]?)?\d{10}$/,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <View
              style={{
                borderBottomWidth: 1,
                margin: 10,
                marginTop: 20,
                borderRadius: 4,
                borderColor: errors.mobile_Number ? 'red' : 'white',
              }}>
              <TextInput
                placeholder="Mobile Number"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </View>
          )}
          name="customer_phone"
        />
        {errors.mobile_Number && <Text>This is required.</Text>}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <View
              style={{
                borderBottomWidth: 1,
                margin: 10,
                marginTop: 20,
                borderRadius: 4,
                borderColor: errors.password ? 'red' : 'white',
              }}>
              <TextInput
                placeholder="Password"
                secureTextEntry
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </View>
          )}
          name="customer_password"
        />
        {errors.password && <Text>This is required.</Text>}
        {/* <TextInput placeholder="Username" />
        <TextInput
          placeholder="Password"
        

        /> */}
        <TouchableOpacity>
        <View style={{marginLeft:230,marginTop:10}}>
        <Text style={{color: 'white', fontSize: 16}}
         onPress={() => navigation.navigate('ForgetPass')}>
          Forgot Password?
        </Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={handleSubmit(onSubmit)}
          // onPress={() => {}}
          // colors={['#FFB900', '#FFE435', '#FFA000']}
          // start={{x: 0, y: 0}}
          // end={{x: 1, y: 0}}
          style={{
            borderRadius: 100,
            width: 150,
            alignSelf: 'center',
            alignItems: 'center',
            paddingVertical: 5,
            marginTop: 40,
            marginBottom: 30,
            backgroundColor: 'white',
          }}>
          <Text style={{color: 'black', fontSize: 19}}>LOGIN</Text>
        </TouchableOpacity>
        
      </View>
      <View style={{marginTop:20}}><Text style={{color: 'black', fontSize: 16, textAlign: 'center'}}>
          Dont't have an account?{' '}
          <Text
            onPress={() => navigation.navigate('Signup')}
            style={{fontWeight: 'bold'}}>
            Signup
          </Text>
        </Text></View>
        <View style={{marginLeft:65,marginVertical:10}}>
          <Image
            source={require('../../../image/veg.jpg')}
          />
        </View>
    </View>
    
    
  );
};

export default LoginView
interface LoginViewProps{
  navigation?:any;
  openDrawer?:any;
}