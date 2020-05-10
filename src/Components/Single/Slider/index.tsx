import React, { FC, useMemo } from 'react';
import { Gray } from '@/constants/colors';
import RNSlider from '@react-native-community/slider';
import { useDarkMode } from 'react-native-dark-mode';

export const Slider: FC = () => {
  const isDarkMode = useDarkMode();
  const mainColor = useMemo(() => isDarkMode ? Gray.Gray500 : Gray.Gray800, [isDarkMode]);
  const subColor = useMemo(() => isDarkMode ? Gray.Gray800 : Gray.Gray500, [isDarkMode]);

  return (
    <RNSlider
      thumbTintColor={mainColor}
      maximumTrackTintColor={subColor}
      minimumTrackTintColor={mainColor}
      step={5}
      maximumValue={180}
      style={{
        width: '60%',
        borderColor: mainColor,
        shadowColor: subColor,
      }}
    />
  )
}