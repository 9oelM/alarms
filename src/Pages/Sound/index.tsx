import React, { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Vibration } from "react-native";

import { GeneralContainer } from "@/Layouts/GeneralContainer";
import { SOUND } from "@/constants/screens";
import { WideButton } from "@/Components/Single/WideButton";
import { ALARM_SOUNDS } from "@/constants/sounds";
import { ButtonWithTitle } from "@/Components/Combi/ButtonWithTitle";
import { padding25px } from "@/constants/padding";
import { SelectAlarmSound, ToggleAlarmVibration } from "@/redux/actions/ALARM";
import { RootState } from "@/redux/reducers";
// @ts-ignore
// import testSound from "@/assets/sounds/test.mp3";

export const Sound: FC = () => {
  const { selectedAlarmSound, isAlarmVibrationEnabled } = useSelector(
    (s: RootState) => ({
      selectedAlarmSound: s.Alarm.selectedAlarmSound,
      isAlarmVibrationEnabled: s.Alarm.isAlarmVibrationEnabled,
    }),
  );
  const dispatch = useDispatch();
  const alarmSoundsList = ALARM_SOUNDS.map(
    ({ displayedName, fileName }, idx, arr) => {
      const isActive =
        displayedName === selectedAlarmSound.displayedName &&
        fileName === selectedAlarmSound.fileName;

      return (
        <WideButton
          margin={idx !== arr.length - 1 ? `0 0 5px 0` : `0px`}
          onPress={() => {
            if (!isActive) {
              dispatch(SelectAlarmSound({ displayedName, fileName }));
            }
          }}
          isActive={isActive}
          title={displayedName}
          key={`${fileName}-${idx}`}
        />
      );
    },
  );

  useEffect(() => {
    if (isAlarmVibrationEnabled) {
      Vibration.vibrate(1);
    }
  }, [isAlarmVibrationEnabled]);

  return (
    <GeneralContainer title={SOUND}>
      {alarmSoundsList}
      {padding25px}
      <ButtonWithTitle
        mainTitle="Vibration"
        buttonTitle={isAlarmVibrationEnabled ? `Enabled` : `Disabled`}
        isActive={isAlarmVibrationEnabled}
        onPress={() => {
          dispatch(ToggleAlarmVibration());
        }}
      />
    </GeneralContainer>
  );
};
