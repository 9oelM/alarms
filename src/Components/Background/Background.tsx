import React, { FC, useState } from "react";
import { useHeartbeat } from "@/hooks/useHeartbeat";
import { useAlarmRange } from "@/hooks/useAlarmRange";
import { calculateAlarmTimes } from '@/util/calculateAlarmTimes';
import { playAlarm } from '@/util/playAlarm';
import { areSameMinute } from '@/util/isSameMinute';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/reducers';
import { Vibration } from 'react-native';

export const Background: FC = () => {
  const { startTime, endTime } = useAlarmRange();
  const { sound: { fileName }, isVibrationEnabled } = useSelector((s: RootState) => ({ sound: s.Alarm.selectedAlarmSound, isVibrationEnabled: s.Alarm.isAlarmVibrationEnabled }));

  const alarmTimes = calculateAlarmTimes(startTime, endTime);

  useHeartbeat(() => {
    /**
     * @todo add PLAY_ALARM action
     * so that each element alarmTimes can be deleted after being played
     */
    if (alarmTimes.some((t) => areSameMinute(t, new Date()))) {
      if (fileName !== 'None') playAlarm(fileName);
      if (isVibrationEnabled) Vibration.vibrate([0, 500, 200, 500], true);
    }
  });

  return <></>;
};
