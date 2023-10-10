import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { Controller, useForm } from 'react-hook-form'
import { Picker } from '@react-native-picker/picker'


const EditProfileView = ({navigation}:EditProfileViewProps) => {

    const securityQuestions = [
        'Select a security question',
        'What is your favorite color?',
        'What is your mother\'s maiden name?',
        // Add more security questions as needed
      ];
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    const {
        control,
        handleSubmit,
        setValue,
        getValues,
        formState: {errors,isValid },
      } = useForm();
    
  return (
    <View>
        <ScrollView>
    <View style={{ backgroundColor: '#75c22d', height: 50, elevation: 5}}>  
    <View style={{flexDirection:'row',marginLeft:10,marginTop:10}}>
    <TouchableOpacity onPress={() => navigation.navigate('ProfileMain')}>
    <Icon name="arrow-back-outline" size={(30)}color={'white'}/>
    </TouchableOpacity>
    <Text style={{color: 'white', fontSize: 25,textAlign:'center',marginLeft:40}}>
      Manage Your Details
    </Text>
    </View>
    </View> 
   
 
 

   <View
   style={{
     elevation: 10,
     backgroundColor: 'white',
     borderRadius: 10,
     margin: 10,
     marginTop: 30,
     paddingVertical: 20,
     paddingHorizontal: 15,}}>
      <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: '#155928',
            textAlign: 'center',
          }}>
          Profile Details
        </Text>
      
        <TouchableOpacity
            //   onPress={() => setIsEditMode(true)} 
              style={{
                position: 'absolute',
                 top: 60, 
                 right: 30,
              }}>
             <Icon name="create-outline" size={(30)} color="black" />
        </TouchableOpacity>
        <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
        <View>
            <Text style={{ color: 'black', fontSize: 16, marginLeft:10,marginTop:20}}>Name</Text>
          <View style={{margin: 10,marginTop:5,borderWidth:1,borderRadius:5, borderColor: errors.customer_name ?'red': '#75c22d'}}>
    
            <TextInput
              placeholder="First Name and Last Name"
              placeholderTextColor="black"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </View>
          </View>
        )}
        name="customer_name"
      />
      {errors.customer_name && <Text style={{ color: 'red' }}>This field is required</Text>}


<Controller
        control={control}
        rules={{
          required: true,
          maxLength:10,
          minLength:10,
          pattern: /^(\+\d{1,3}[- ]?)?\d{10}$/
        }}
        render={({field: {onChange, onBlur, value}}) => (
            <View>
            <Text style={{ color: 'black', fontSize: 16, marginLeft:10}}>Mobile Number</Text>
            <View style={{margin: 10,borderWidth:1,borderRadius:5, borderColor: errors.customer_phone ?'red': '#75c22d'}}>
            <TextInput
              placeholder="Mobile Number"
              placeholderTextColor="black"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </View>
          </View>
        )}
        name="customer_phone"
      />
      {errors.customer_phone && <Text style={{ color: 'red' }}>Invalid mobile number (10 digits required)</Text>}
    
    

      <Controller
        control={control}
        rules={{
          required: true,
          maxLength:10,
          minLength:10,
          pattern: /^(\+\d{1,3}[- ]?)?\d{10}$/
        }}
        render={({field: {onChange, onBlur, value}}) => (
            <View>
            <Text style={{ color: 'black', fontSize: 16, marginLeft:10}}>WhatsApp Number</Text>
            <View style={{margin: 10,borderWidth:1,borderRadius:5, borderColor: errors.customer_phone ?'red': '#75c22d'}}>
                
            <TextInput
              placeholder="WhatsApp Number"
              placeholderTextColor="black"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </View>
          </View>
        )}
        name="customer_phone"
      />
      {errors.customer_phone && <Text style={{ color: 'red' }}>Invalid WhatsApp number (10 digits required)</Text>}

      <Controller
      control={control}
      rules={{
        required: true,
        pattern: {
          value: emailRegex,
          message: 'Invalid email address',
        },
      }}
      render={({ field: { onChange, onBlur, value } }) => (
        <View>
            <Text style={{ color: 'black', fontSize: 16, marginLeft:10}}>Email</Text>
        <View style={{borderWidth:1, margin: 10,marginTop:10,borderRadius:5,borderColor:'#75c22d'}}>
        <TextInput
          placeholder="Optional"
          placeholderTextColor="black"
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
        />
        </View>
        </View>
      )}
      name="customer_email"
    />

<Controller
        control={control}
        rules={{
          required: true,
          pattern:/^[^$,#]{8}$/, 
      
            // message: 'Password must be 8 characters long and not contain $, #, or ,',
          
        }}
        render={({field: {onChange, onBlur, value}}) => (
            <View>
            <Text style={{ color: 'black', fontSize: 16, marginLeft:10}}>Password</Text>
            <View style={{margin: 10,borderWidth:1,borderRadius:5, borderColor: errors.customer_password ?'red': '#75c22d'}}>
            <TextInput
              placeholder="Password"
              placeholderTextColor="black" secureTextEntry
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </View>
          </View>
        )}
        name="customer_password"
      />
      {errors.customer_password && <Text style={{ color: 'red' }}>This field is required</Text>}

    <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <View>
            <Text style={{ color: 'black', fontSize: 16, marginLeft:10}}>Security Question </Text>
            <View style={{ borderWidth: 1, margin: 10, borderRadius: 5, borderColor: '#75c22d' }}>
              <Picker
                selectedValue={value}
                onValueChange={onChange}
                style={{ fontSize: 3 }}
              >
                {securityQuestions.map((question, index) => (
                  <Picker.Item
                    key={index.toString()}
                    label={question}
                    value={question}
                  />
                ))}
              </Picker>
            </View>
            </View>
          )}
          name="security_question"
          defaultValue={securityQuestions[0]}
        />
 
 <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
            <Text style={{ color: 'black', fontSize: 16, marginLeft:10}}>Answer</Text>
            <View style={{ margin: 10, borderWidth: 1, borderRadius: 5, borderColor: errors.security_answer ? 'red' : '#75c22d' }}>
              <TextInput
                placeholder="Answer to Security Question"
                placeholderTextColor="black"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </View>
            </View>
          )}
          name="security_answer"
        />
        {errors.security_answer && <Text style={{ color: 'red' }}>This field is required</Text>}


           

  {/* {isEditMode && ( */}
  <TouchableOpacity
    // onPress={handleSubmit(onSubmit)}
    style={{
      borderRadius: 100,
      width: 150,
      alignSelf: 'center',
      alignItems: 'center',
      paddingVertical: 5,
      marginTop: 50,
      marginBottom: 10,
      backgroundColor: '#75c22d',
    }}>
    <Text style={{ color: 'white', fontSize: 19 }}>Save</Text>
  </TouchableOpacity>
{/* )} */}
          
    </View>
    </ScrollView>

    </View>
 
  )
}
export default EditProfileView

interface EditProfileViewProps{ 
    navigation?:any;

  }