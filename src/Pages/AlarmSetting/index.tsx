import React, { FC, ReactNode } from "react";
import { useSelector } from "react-redux";

import { GeneralContainer } from "@/Layouts/GeneralContainer";
import { Padding, Normalizer } from "@/styled/Padding";
import { AlarmToggleSwitch } from "@/Components/Combi/AlarmToggleSwitch";
import { ButtonWithTitle } from "@/Components/Combi/ButtonWithTitle";
import { RootState } from "@/redux/reducers";
import { formatHHMM } from "@/util/timeFormat";
import { DaysPicker } from "@/Components/Combi/DaysPicker";

export interface TimePickersOpenState {
  isStartingTime: boolean;
  isEndingTime: boolean;
}

export const AlarmSetting: FC = () => {
  const normalizer8px: ReactNode = <Normalizer height="8px" />;
  const padding25px: ReactNode = <Padding height="25px" />;
  const { startTime, endTime } = useSelector((s: RootState) => ({
    startTime: formatHHMM({ date: s.alarmStartingTime }),
    endTime: formatHHMM({ date: s.alarmEndingTime }),
  }));

  return (
    <GeneralContainer title="Alarms">
      {normalizer8px}
      {padding25px}
      <AlarmToggleSwitch />
      {normalizer8px}
      {padding25px}
      <ButtonWithTitle mainTitle="Start" buttonTitle={startTime} />
      {padding25px}
      <ButtonWithTitle mainTitle="End" buttonTitle={endTime} />
      {padding25px}
      <ButtonWithTitle mainTitle="Interval" buttonTitle="10 mins" />
      {padding25px}
      <DaysPicker />
      {padding25px}
      <ButtonWithTitle mainTitle="Sound" buttonTitle="Configure" />
    </GeneralContainer>
  );
};
