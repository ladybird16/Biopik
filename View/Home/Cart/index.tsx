import React from 'react';
import {View, ScrollView} from 'react-native';

const SquareView = (props:any) => {
  return (
    <View
      style={{
        height: props.size,
        width: props.size,
        backgroundColor: props.color,
      }}
    />
  );
};

export default function HomeScreen() {
  return (
    <ScrollView horizontal={true} >
      <SquareView size={100} color="red" />
      <SquareView size={100} color="blue" />
      <SquareView size={100} color="green" />
      <SquareView size={100} color="yellow" />
      <SquareView size={100} color="gray" />
      <SquareView size={100} color="cyan" />
      <SquareView size={100} color="black" />
    </ScrollView>
  );
}