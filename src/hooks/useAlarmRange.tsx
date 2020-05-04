/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import { RootState } from '@/redux/reducers';
import { useSelector } from 'react-redux';
import { AlarmState } from '@/redux/reducers/ALARM';

export interface AlarmRange {
  startTime: AlarmState['alarmStartingTime'];
  endTime: AlarmState['alarmEndingTime'];
}

export const useAlarmRange = () =>
  useSelector((s: RootState) => ({
    startTime: s.Alarm.alarmStartingTime,
    endTime: s.Alarm.alarmEndingTime,
  }));
