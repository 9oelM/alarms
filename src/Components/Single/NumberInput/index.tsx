import React, { FC, useState, useCallback, useEffect } from 'react';
import { TouchableOpacityStyled, TextStyled } from '../WideButton/styled';
import { TextInputStyled } from './styled';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/reducers';
import { ChangeAlarmInterval } from '@/redux/actions/ALARM';
import { NativeSyntheticEvent, TextInputSubmitEditingEventData, Alert } from 'react-native';
import { MAX_ALARM_INTERVAL, MIN_ALARM_INTERVAL } from '@/constants/alarmInterval';
import { AlertModal } from '@/Components/Single/AlertModal';

export const NumberInput: FC = () => {
  const [isToggled, setToggled] = useState(false); 
  const [msgAboutAlarmInterval, setMsgAboutAlarmInterval] = useState('');
  const alarmIntervalInMins = useSelector((s: RootState) => s.Alarm.alarmIntervalInMins);
  const dispatch = useDispatch();

  const handleToggle = useCallback(
    () => {
      setToggled((prev) => !prev);
    },
    [],
  );

  const handleSubmitEditing = ({ nativeEvent: { text }}: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
    let adjustedAlarmIntervalInMinsString: string = text.replace(/[^0-9]/g, '');
    if (adjustedAlarmIntervalInMinsString === '') {
      setMsgAboutAlarmInterval(() => `Enter valid alarm interval minutes`); 
      setToggled(() => false);
      return;
    }
    let adjustedAlarmIntervalInMins: number = Number.parseInt(adjustedAlarmIntervalInMinsString);
    if (adjustedAlarmIntervalInMins > MAX_ALARM_INTERVAL) {
      setMsgAboutAlarmInterval(() => `Maximum alarm interval possible is ${MAX_ALARM_INTERVAL} mins.`);
      adjustedAlarmIntervalInMins = MAX_ALARM_INTERVAL;
    } else if (adjustedAlarmIntervalInMins < MIN_ALARM_INTERVAL) {
      setMsgAboutAlarmInterval(() => `Minimum alarm interval possible is ${MIN_ALARM_INTERVAL} min.`);
      adjustedAlarmIntervalInMins = MIN_ALARM_INTERVAL;
    }
    dispatch(ChangeAlarmInterval(adjustedAlarmIntervalInMins));
    setToggled(() => false);
  };

  useEffect(() => {
    if (msgAboutAlarmInterval !== '') setTimeout(() => setMsgAboutAlarmInterval(() => ''), 1500);
  }, [msgAboutAlarmInterval])

  return (
    <>
    { 
    isToggled ?
      <TextInputStyled 
        keyboardType='numeric'
        autoFocus
        onBlur={handleToggle}
        onSubmitEditing={handleSubmitEditing}
        defaultValue={String(alarmIntervalInMins)}
        maxLength={3}  //setting limit of input
      /> 
      :
      <TouchableOpacityStyled 
        onPress={handleToggle}
        activeOpacity={0.5} 
        style={{ 
          width: '40%',
          height: 30,
          borderRadius: 10,
        }}>
      <TextStyled 
        style={{ 
        fontSize: 15,
        }}
      >
        {`${alarmIntervalInMins} mins`}
      </TextStyled>
      </TouchableOpacityStyled>
    }
    {
      msgAboutAlarmInterval === '' ? 
        null : 
        <AlertModal msg={msgAboutAlarmInterval}/>
    }
    </>
  );
}
