import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import { Picker } from '@react-native-picker/picker';



const ForgetpassView = ({navigation}:ForgetpassViewProps) => {
  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: {errors},
  } = useForm();
  const securityQuestions = [
    'Select a security question',
    'What is your favorite color?',
    'What is your mother\'s maiden name?',
  ];

  return (
    <View style={{backgroundColor:'white',flex:1}}>
       <View style={{flexDirection:'row',marginLeft:10}}>
    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
    {/* <Icon name="arrow-back-outline" size={(30)}color={'white'}/> */}
    </TouchableOpacity>
    </View>
    <View style={{marginTop:25,marginLeft:40}}>
      <Text style={{fontSize:30,fontWeight:'bold'}}>Forget Password</Text>
    </View>
    <View style ={{backgroundColor:'#68d96f',
        marginTop:50,
        marginLeft:30,
        marginRight:30,
        borderTopLeftRadius: 50, // Adjust the value to control the radius
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 10}}>
          <View style={{marginTop:20,marginLeft:15}}>
          <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <View style={{marginTop:10}}>
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
            <View style={{marginTop:10}}>
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
        <Controller
        control={control}
        rules={{
          required: true,
          
        }}
        render={({field: {onChange, onBlur, value}}) => (
            <View style={{marginTop:10}}>
            <Text style={{ color: 'black', fontSize: 16, marginLeft:10}}>New Password</Text>
            <View style={{margin: 10,borderWidth:1,borderRadius:5, borderColor: errors.customer_password ?'red': 'white'}}>
            <TextInput
              placeholder="Enter New Password"
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
            <View style={{marginTop:10}}>
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
      <TouchableOpacity
           onPress={() => {
            // handleSubmit(onSubmit)();
            
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
        </View>
    </View>
  )
}

export default ForgetpassView
interface ForgetpassViewProps{
  navigation?:any;
}