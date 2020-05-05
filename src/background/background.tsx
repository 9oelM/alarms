import { useHeartbeat } from "@/hooks/useHeartbeat";
import { useAlarmRange } from "@/hooks/useAlarmRange";
import { calculateAlarmTimes } from '@/util/calculateAlarmTimes';
import { playAlarm } from '@/util/playAlarm';
import { areSameMinute } from '@/util/isSameMinute';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/reducers';
import { Vibration } from 'react-native';

export const backgroundHeartbeat = ({ 
  Alarm: { 
    alarmStartingTime, 
    alarmEndingTime, 
    isAlarmEnabled, 
    alarmEnabledDays, 
    isAlarmVibrationEnabled,
    selectedAlarmSound: { fileName },
  }}: RootState) => {
  const alarmTimes = calculateAlarmTimes(alarmStartingTime, alarmEndingTime);

  if (alarmTimes.some((t) => areSameMinute(t, new Date())) && isAlarmEnabled) {
    if (fileName !== 'None') playAlarm(fileName);
    if (isAlarmVibrationEnabled) Vibration.vibrate([0, 500, 200, 500], true);
  }
};
