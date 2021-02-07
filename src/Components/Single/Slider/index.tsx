import React, { FC, useMemo, useState } from 'react';
import { Gray } from '@/constants/colors';
import RNSlider from '@react-native-community/slider';
import { useDarkMode } from 'react-native-dark-mode';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeAlarmInterval } from '@/redux/actions/ALARM';
import { RootState } from '@/redux/reducers';
import { MIN_ALARM_INTERVAL, MAX_ALARM_INTERVAL } from '@/constants/alarmInterval';

export const Slider: FC = () => {
  const isDarkMode = useDarkMode();
  const mainColor = useMemo(() => isDarkMode ? Gray.Gray500 : Gray.Gray800, [isDarkMode]);
  const subColor = useMemo(() => isDarkMode ? Gray.Gray800 : Gray.Gray500, [isDarkMode]);
  const [timeoutId, setTimeoutId] = useState<null | number>(null)

  const dispatch = useDispatch();

  const handleValueChange = (alarmIntervalinMins: number) => {
    if (timeoutId !== null) clearTimeout(timeoutId)
    const newTimeoutId = setTimeout(() => {
      dispatch(ChangeAlarmInterval(alarmIntervalinMins))
    }, 50);
    setTimeoutId(newTimeoutId);
  };

  const alarmIntervalinMins = useSelector((s: RootState) => s.Alarm.alarmIntervalInMins);

  return (
    <RNSlider
      thumbTintColor={mainColor}
      maximumTrackTintColor={subColor}
      minimumTrackTintColor={mainColor}
      minimumValue={MIN_ALARM_INTERVAL}
      maximumValue={MAX_ALARM_INTERVAL}
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