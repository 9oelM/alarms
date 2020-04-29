import React, { useState, FC } from "react";
import { View, Button, Platform, Text } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import { mode } from "@/constants/timePicker";

export interface Props {
  instruction: string;
}

export const TimePicker: FC<Props> = ({ instruction }) => {
  const [date, setDate] = useState(new Date(1598051730000));

  // const onChange = (event, selectedDate) => {
  //   const currentDate = selectedDate || date;
  //   setShow(Platform.OS === `ios`);
  //   setDate(currentDate);
  // };

  // const showMode = (currentMode) => {
  //   setShow(true);
  //   setMode(currentMode);
  // };

  return (
    <View>
      <Text>{instruction}</Text>
      <DateTimePicker
        testID="dateTimePicker"
        timeZoneOffsetInMinutes={0}
        value={date}
        mode={mode}
        is24Hour={true}
        display="default"
        // onChange={onChange}
      />
    </View>
  );
};
