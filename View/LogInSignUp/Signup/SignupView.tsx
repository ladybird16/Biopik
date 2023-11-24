import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import { Picker } from '@react-native-picker/picker';
import { ScrollView } from 'react-native-gesture-handler';

const SignupView = ({navigation}:SignupViewProps) => {
    const {
        control,
        handleSubmit,
        setValue,
        getValues,
        formState: {errors},
      } = useForm();
    
      const onSubmit=(data: any)=>{
        
      }
      const securityQuestions = [
        'Select a security question',
        'What is your favorite color?',
        'What is your mother\'s maiden name?',
        // Add more security questions as needed
      ];
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
   
  return (
    <ScrollView style={{paddingBottom:10,marginBottom:10,backgroundColor:'white',marginTop:0}}>
    <View >
     
      
      
        <View style ={{backgroundColor:'#83A2FF',
        margin:20,
        borderRadius:10,
        elevation:10 
    }}>
         <Text style={{fontSize:30,color:'black',textAlign:'center',fontWeight:'bold',marginTop:5}}>Create Account</Text>
            {/* <Text style={{textAlign:'center',fontSize:25,color:'white',marginTop:20}}>Sign Up</Text> */}
        <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
        <View>
            <Text style={{ color: 'black', fontSize: 16, marginLeft:10}}>Name</Text>
          <View style={{margin: 10,marginTop:5,borderWidth:1,borderRadius:5, borderColor: errors.customer_name ?'red': 'white'}}>
    
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
            <View style={{margin: 10,borderWidth:1,borderRadius:5, borderColor: errors.customer_phone ?'red': 'white'}}>
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
            <View style={{margin: 10,borderWidth:1,borderRadius:5, borderColor: errors.customer_phone ?'red': 'white'}}>
                
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
        <View style={{borderWidth:1, margin: 10,marginTop:10,borderRadius:5,borderColor:'white'}}>
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
          pattern: {
            value: /^[^$,#]{8}$/,
            message: 'Password must be 8 characters long and not contain $, #, or ,',
          },
          
        }}
        render={({field: {onChange, onBlur, value}}) => (
            <View>
            <Text style={{ color: 'black', fontSize: 16, marginLeft:10}}>Password</Text>
            <View style={{margin: 10,borderWidth:1,borderRadius:5, borderColor: errors.customer_password ?'red': 'white'}}>
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
        rules={{
          required: true,
          
        }}
        render={({field: {onChange, onBlur, value}}) => (
            <View>
            <Text style={{ color: 'black', fontSize: 16, marginLeft:10}}>Confirm Password</Text>
            <View style={{margin: 10,borderWidth:1,borderRadius:5, borderColor: errors.confirm_password ?'red': 'white'}}>
            <TextInput
              placeholder="Re-Enter Password" 
              placeholderTextColor="black"secureTextEntry
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </View>
          </View>
        )}
        name="confirm_password"
      />
      {errors.customer_password && <Text style={{ color: 'red' }}>This field is required</Text>}


      <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <View>
            <Text style={{ color: 'black', fontSize: 16, marginLeft:10}}>Security Question </Text>
            <View style={{ borderWidth: 1, margin: 10, borderRadius: 5, borderColor: 'white' }}>
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
            <View style={{ margin: 10, borderWidth: 1, borderRadius: 5, borderColor: errors.security_answer ? 'red' : 'white' }}>
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


      <TouchableOpacity
           onPress={() => {
            handleSubmit(onSubmit)();
            
          }}
          style={{
            borderRadius: 100,
            width: 150,
            alignSelf: 'center',
            alignItems: 'center',

            paddingVertical: 5,
            marginTop: 30,
            marginBottom: 10,
            backgroundColor:'white'
          }}>
          <Text style={{color: '#154d19', fontSize: 19}}>Submit</Text>
        </TouchableOpacity>

     
 
        </View>
       
        <Text style={{color: 'black', fontSize: 16, textAlign: 'center',marginTop:20}}>
          Already have an account?{' '}
          <Text onPress={()=> navigation.navigate('Login')} style={{fontWeight:'bold'}}>Login</Text>
        </Text> 
        
    </View>
    </ScrollView>
  )
}

export default SignupView
interface SignupViewProps{
    navigation:any;
}