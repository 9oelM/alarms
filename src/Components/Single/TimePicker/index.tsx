import React, { FC, SetStateAction, Dispatch, useEffect } from "react";
import { Platform, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import { mode } from "@/constants/timePicker";
import { Time } from "@/typings";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/reducers";
import {
  AddAlarmStartingTime,
  AddAlarmEndingTime,
} from "@/redux/actions/ALARM";
import {
  HeaderStyled,
  ContainerStyled,
  DateTimePickerContainerStyled,
  TextStyled,
} from "./styled";
import { useAlarmRange } from "@/hooks/useAlarmRange";

export interface Props {
  timeType: Time;
  setTimeType: Dispatch<SetStateAction<Time | null>>;
}

export const TimePicker: FC<Props> = ({ timeType, setTimeType }) => {
  const { startTime, endTime } = useAlarmRange();
  const dispatch = useDispatch();

  const [s, e] = [startTime, endTime].map((t) => t.getTime());

  useEffect(() => {
    Platform.OS === `android` && setTimeType(() => null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [s, e]);

  const dateTimePicker = (
    <DateTimePicker
      testID="dateTimePicker"
      timeZoneOffsetInMinutes={Platform.OS === `ios` ? 60 * 9 : 0}
      value={timeType === `start` ? startTime : endTime}
      mode={mode}
      is24Hour={true}
      display="default"
      onChange={(evt, selectedDate) => {
        if (!selectedDate || evt.type === `dismissed`) {
          setTimeType(() => null);

          return;
        }

        if (timeType === `start`) {
          dispatch(AddAlarmStartingTime({ time: selectedDate }));
        } else {
          dispatch(AddAlarmEndingTime({ time: selectedDate }));
        }
      }}
    />
  );
  return Platform.OS === `ios` ? (
    <ContainerStyled>
      <DateTimePickerContainerStyled>
        {dateTimePicker}
      </DateTimePickerContainerStyled>
      <HeaderStyled>
        <TouchableOpacity onPress={() => setTimeType(() => null)}>
          <TextStyled>Done</TextStyled>
        </TouchableOpacity>
      </HeaderStyled>
    </ContainerStyled>
  ) : (
    <>{dateTimePicker}</>
  );
};

