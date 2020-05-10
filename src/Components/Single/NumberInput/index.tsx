import React, { FC, useState, useCallback } from 'react';
import { TouchableOpacityStyled, TextStyled } from '../WideButton/styled';
import { TextInputStyled } from './styled';

export const NumbericInput: FC = () => {
  const [isToggled, setToggled] = useState(false);

  const handleOnPress = useCallback(
    () => {
      setToggled((prev) => !prev);
    },
    [],
  );

  return (
    <>
    { 
    isToggled ?
      <TextInputStyled 
        keyboardType='numeric'
        // onChangeText={(text)=> this.onChanged(text)}
        value='5'
        maxLength={3}  //setting limit of input
      /> 
      :
      <TouchableOpacityStyled 
        onPress={handleOnPress}
        activeOpacity={0.5} 
        style={{ 
          width: '40%',
          height: 30,
          borderRadius: 10,
        }}>
      <TextStyled 
        style={{ 
        fontSize: 15,
        }}
      >
        5 mins
      </TextStyled>
      </TouchableOpacityStyled>
    }
    </>
  );
}
