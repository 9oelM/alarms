import React, { FC, useCallback } from "react";
import { Switch } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { ContainerStyled, SwitchContainerStyled } from "./styled";
import { Title } from "@/Components/Single/Title";
import { Gray } from "@/constants/colors";
import { RootState } from "@/redux/reducers";
import { ToggleAlarm } from "@/redux/actions/ALARM";

export const AlarmToggleSwitch: FC = () => {
  const dispatch = useDispatch();
  const isAlarmEnabled = useSelector((s: RootState) => s.Alarm.isAlarmEnabled);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onAlarmToggle = useCallback(() => dispatch(ToggleAlarm()), []);

  return (
    <ContainerStyled>
      <Title>Enable</Title>
      <SwitchContainerStyled>
        <Switch
          trackColor={{ false: Gray.Gray50, true: Gray.Gray800 }}
          thumbColor={Gray.Gray200}
          ios_backgroundColor={Gray.Gray50}
          onValueChange={onAlarmToggle}
          value={isAlarmEnabled}
        />
      </SwitchContainerStyled>
    </ContainerStyled>
  );
};
