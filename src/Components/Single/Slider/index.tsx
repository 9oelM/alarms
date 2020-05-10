import React, { FC, useMemo } from 'react';
import { Gray } from '@/constants/colors';
import RNSlider from '@react-native-community/slider';
import { useDarkMode } from 'react-native-dark-mode';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeAlarmInterval } from '@/redux/actions/ALARM';
import { RootState } from '@/redux/reducers';

export const Slider: FC = () => {
  const isDarkMode = useDarkMode();
  const mainColor = useMemo(() => isDarkMode ? Gray.Gray500 : Gray.Gray800, [isDarkMode]);
  const subColor = useMemo(() => isDarkMode ? Gray.Gray800 : Gray.Gray500, [isDarkMode]);

  const dispatch = useDispatch();

  const handleValueChange = (alarmIntervalinMins: number) => dispatch(ChangeAlarmInterval(alarmIntervalinMins)); 

  const alarmIntervalinMins = useSelector((s: RootState) => s.Alarm.alarmIntervalInMins);

  return (
    <RNSlider
      thumbTintColor={mainColor}
      maximumTrackTintColor={subColor}
      minimumTrackTintColor={mainColor}
      minimumValue={1}
      maximumValue={180}
      step={1}
      value={alarmIntervalinMins}
      onValueChange={handleValueChange}
      style={{
        width: '60%',
        borderColor: mainColor,
        shadowColor: subColor,
      }}
    />
  )
}