import React, { FC } from 'react';
import { Slider } from '@/Components/Single/Slider';
import { NumbericInput } from '@/Components/Single/NumberInput';
import { View } from 'react-native';

export const SliderWithNumberInput: FC = () => {
  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <Slider />
      <NumbericInput />
    </View>
  )
}