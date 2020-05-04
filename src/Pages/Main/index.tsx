import React, { FC, useCallback, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { GeneralContainer } from "@/Layouts/GeneralContainer";
import { AlarmToggleSwitch } from "@/Components/Combi/AlarmToggleSwitch";
import { ButtonWithTitle } from "@/Components/Combi/ButtonWithTitle";
import { RootState } from "@/redux/reducers";
import { formatHHMM } from "@/util/timeFormat";
import { DaysPicker } from "@/Components/Combi/DaysPicker";
import { SOUND } from "@/constants/screens";
import { normalizer8px, padding25px } from "@/constants/padding";
import { TimePicker } from "@/Components/Single/TimePicker";
import { Time } from "@/typings";

export interface TimePickersOpenState {
  isStartingTime: boolean;
  isEndingTime: boolean;
}

export const Main: FC = () => {
  const { startTime, endTime } = useSelector((s: RootState) => ({
    startTime: formatHHMM({ date: s.Alarm.alarmStartingTime }),
    endTime: formatHHMM({ date: s.Alarm.alarmEndingTime }),
  }));
  const navigation = useNavigation();
  const [timeType, setTimeType] = useState<Time | null>(null);

  const navigateToSoundPage = useCallback(() => navigation.navigate(SOUND), [
    navigation,
  ]);

  return (
    <GeneralContainer title="Alarms">
      {timeType !== null ? (
        <TimePicker timeType={timeType} setTimeType={setTimeType} />
      ) : null}
      <AlarmToggleSwitch />
      {normalizer8px}
      {padding25px}
      <ButtonWithTitle
        mainTitle="Start"
        buttonTitle={startTime}
        onPress={() => {
          setTimeType(() => `start`);
        }}
      />
      {padding25px}
      <ButtonWithTitle
        mainTitle="End"
        buttonTitle={endTime}
        onPress={() => {
          setTimeType(() => `end`);
        }}
      />
      {padding25px}
      <ButtonWithTitle
        mainTitle="Interval"
        buttonTitle="10 mins"
        onPress={() => {
          // setTimePickerVisible(() => true);
        }}
      />
      {padding25px}
      <DaysPicker />
      {padding25px}
      <ButtonWithTitle
        mainTitle="Sound"
        buttonTitle="Configure"
        onPress={navigateToSoundPage}
      />
    </GeneralContainer>
  );
};
