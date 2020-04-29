/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React, { FC } from "react";
import { View } from "react-native";

import { Title } from "@/Components/Single/Title";
import { SquareButton } from "@/Components/Single/SquareButton";
import { useDispatch, useSelector } from "react-redux";
import { ToggleDay, Days } from "@/redux/actions";
import { RootState } from "@/redux/reducers";

const IdxToDay: {
  [key: number]: Days;
} = {
  0: "Mon",
  1: "Tue",
  2: "Wed",
  3: "Thu",
  4: "Fri",
  5: "Sat",
  6: "Sun",
};

export const DaysPicker: FC = () => {
  const daysList: Readonly<Array<string>> = [`M`, `T`, `W`, `T`, `F`, `S`, `S`];
  const dispatch = useDispatch();

  const alarmEnabledDays = useSelector((s: RootState) => s.alarmEnabledDays);

  const handleEachDayPress = (idx: number) => {
    return () => dispatch(ToggleDay(IdxToDay[idx]));
  };

  const dayButtons = daysList.map((day, idx) => (
    <SquareButton
      onPress={handleEachDayPress(idx)}
      title={day}
      isActive={alarmEnabledDays[IdxToDay[idx]]}
      key={`${day}-${idx}`}
    />
  ));
  return (
    <>
      <Title>Days</Title>
      <View style={{ display: `flex`, flexDirection: `row` }}>
        {dayButtons}
      </View>
    </>
  );
};
