import { TextInput } from 'react-native';
import React, { FC } from 'react';

export const NumbericInput: FC = () => {
  return (
    <TextInput 
      style={{ width: '30%' }}
      keyboardType='numeric'
      // onChangeText={(text)=> this.onChanged(text)}
      value='5'
      maxLength={3}  //setting limit of input
    />
  )
}
