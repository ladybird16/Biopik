import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import EditProfileView from './EditProfile';


const EditProfile = ({navigation}:EditProfileProps) => {


  return (
    <EditProfileView navigation={navigation}  />
  )
}



export default EditProfile;

interface EditProfileProps{ 
    navigation?:any;

  }