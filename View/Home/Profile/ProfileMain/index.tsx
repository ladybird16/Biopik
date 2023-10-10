import { View, Text } from 'react-native'
import React from 'react'
import ProfileMainView from './ProfileView'

const ProfileMain = ({navigation}:ProfileMainProps) => {
  return (
    <ProfileMainView  navigation={navigation}  />   
  )
}

export default ProfileMain
interface ProfileMainProps{
  navigation?: any;
}