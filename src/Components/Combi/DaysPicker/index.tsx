import React, { FC, useMemo } from "react";
import { View } from "react-native";

import { Title } from "@/Components/Single/Title";
import { SquareButton } from "@/Components/Single/SquareButton";
import { useDispatch, useSelector } from "react-redux";
import { ToggleDay } from "@/redux/actions";
import { RootState } from "@/redux/reducers";
import { useDimensions } from "@/hooks/useDimensions";
import {
  OUT_MOST_VIEW_PADDING,
  DAYS_PICKER_ITEM_MARGIN_RIGHT,
} from "@/constants/padding";
import { IdxToDay } from "@/constants/daysPicker";

export const DaysPicker: FC = () => {
  const daysList: Readonly<Array<string>> = [`M`, `T`, `W`, `T`, `F`, `S`, `S`];
  const dispatch = useDispatch();

  const alarmEnabledDays = useSelector((s: RootState) => s.alarmEnabledDays);

  const handleEachDayPress = (idx: number) => {
    return () => dispatch(ToggleDay(IdxToDay[idx]));
  };

  const {
    window: { width },
  } = useDimensions();

  const singleSquareButtonWidth = useMemo(
    () =>
      (width - OUT_MOST_VIEW_PADDING * 2 - DAYS_PICKER_ITEM_MARGIN_RIGHT * 6) /
      7,
    [width],
  );

  const dayButtons = daysList.map((day, idx) => (
    <SquareButton
      width={singleSquareButtonWidth}
      onPress={handleEachDayPress(idx)}
      title={day}
      marginRight={idx !== 6 ? DAYS_PICKER_ITEM_MARGIN_RIGHT : 0}
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
