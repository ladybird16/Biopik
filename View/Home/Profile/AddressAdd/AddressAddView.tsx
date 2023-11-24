import { View, Text, TouchableOpacity, Dimensions, ToastAndroid, TextInput } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { Controller, useForm } from 'react-hook-form'
import { ScrollView } from 'react-native-gesture-handler'
import RadioButtons from 'react-native-radio-buttons-group';



const AddressAddView = ({navigation,AddressAdd}:AddressAddViewProps) => {
 
    const {
        control,
        handleSubmit,
        setValue,
        getValues,
        formState: {errors},
      } = useForm();
    
      const onSubmit=(data: any)=>{
        // AddressAdd(data);
      }
    
    //   const pinVerify =()=>{
    //     if(!!getValues('pin') && getValues('pin').length == 6){
    //       console.log("service call");
          
    //     }else{
    //       ToastAndroid.show('Please Enter Pin', 3000)
    //     }
        
    //  }
  return (
    <View>
    
<View style={{ backgroundColor: '#75c22d', height: 50, elevation: 5}}>  
<View style={{flexDirection:'row',marginLeft:10,marginTop:10}}>
<TouchableOpacity onPress={() => navigation.navigate('AddressList')}>
<Icon name="arrow-back-outline" size={(30)}color={'white'}/>
</TouchableOpacity>
<Text style={{color: 'white', fontSize: 25,textAlign:'center',marginLeft:40}}>
  Manage Your Address
</Text>
</View>
</View> 
  
  <ScrollView style={{paddingBottom:70,marginBottom:100}}>
   <View
   style={{
     elevation: 10,
     backgroundColor: 'white',
     borderRadius: 10,
     margin: 10,
    //  marginTop: 10,
     paddingVertical: 20,
     paddingHorizontal: 15,}}>
      
     

        <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <View style={{margin: 10,borderBottomWidth:1, borderColor: errors.house_no ?'red': '#75c22d'}}>
            <TextInput
              placeholder="Flat No/House No"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </View>
        )}
        name="house_no"
      />
      {errors.Name && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <View style={{borderBottomWidth:1, margin: 10,marginTop:20, borderColor: errors.address_line1 ?'red': '#75c22d'}}>
            <TextInput
              placeholder="Socity Name/Building Name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </View>
        )}
        name="address_line1"
      />
      {errors.mobile_Number && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <View style={{margin: 10,borderBottomWidth:1, borderColor: errors.address_line2 ?'red': '#75c22d'}}>
            <TextInput
              placeholder="Block No "
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </View>
        )}
        name="address_line2"
      />
      {errors.Society && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <View style={{margin: 10,borderBottomWidth:1, borderColor: errors.address_line2 ?'red': '#75c22d'}}>
            <TextInput
              placeholder="Street No "
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </View>
        )}
        name="address_line2"
      />
      {errors.Society && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <View style={{margin: 10,borderBottomWidth:1, borderColor: errors.address_line2 ?'red': '#75c22d'}}>
            <TextInput
              placeholder="Address "
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </View>
        )}
        name="address_line2"
      />
      {errors.Society && <Text>This is required.</Text>}

     

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <View style={{margin: 10,borderBottomWidth:1, borderColor: errors.city ?'red': '#75c22d'}}>
            <TextInput
              placeholder="City"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </View>
        )}
        name="city"
      />
      {errors.Address && <Text>This is required.</Text>}

      <Controller
      control={control}
      rules={{
        required: true,
      }}
      render={({ field: { onChange, onBlur, value } }) => (
        <View style={{borderBottomWidth:1, margin: 10,marginTop:20,borderColor: errors.state ?'red': '#75c22d'}}>
        <TextInput
          placeholder="State"
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
        />
        </View>
      )}
      name="state"
    />

<Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <View style={{margin: 10,borderBottomWidth:1, borderColor: errors.country ?'red': '#75c22d'}}>
            <TextInput
              placeholder="Country"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </View>
        )}
        name="country"
      />
      {errors.Address && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
          // maxLength:6,
          // minLength:6,
          // pattern: /^(\+\d{1,3}[- ]?)?\d{10}$/
         }}
        render={({field: {onChange, onBlur, value}}) => (
          <View style={{borderBottomWidth:1, margin: 10,marginTop:20, borderColor: errors.pin ?'red': '#75c22d'}}>
            <TextInput
              placeholder="Pin Code"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </View>
        )}
        name="pin"
      />
      {errors.Pin && <Text>This is required.</Text>}


      <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
      
          style={{
            borderRadius: 100,
            width: 150,
            alignSelf: 'center',
            alignItems: 'center',
            paddingVertical: 5,
            marginTop: 50,
            marginBottom: 10,
            backgroundColor:'#75c22d'
          }}>
          <Text style={{color: 'white', fontSize: 19}}>Save</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    </View>
  )
}

export default AddressAddView
interface AddressAddViewProps{ 
    navigation?:any;
    AddressAdd?: any
  }