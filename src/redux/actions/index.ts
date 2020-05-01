import { ActionTypes } from "./actionTypes";
import { Action } from "redux";
import { Days } from "@/typings";
import { SoundFile } from "@/constants/sounds";

// type Action<T, Parameter> = (params: Parameter) => { type: T } & Parameter;

// interface Action<T> {
//   type: T;
// }

interface AlarmTimePayload {
  time: Date;
}

export type AddAlarmStartingTimeAction = Action<ActionTypes.ADD_ALARM_STARTING_TIME> &
  AlarmTimePayload;

export const AddAlarmStartingTime: (
  param: AlarmTimePayload,
) => AddAlarmStartingTimeAction = ({ time }) => ({
  type: ActionTypes.ADD_ALARM_STARTING_TIME,
  time,
});

export type AddAlarmEndingTimeAction = Action<ActionTypes.ADD_ALARM_ENDING_TIME> &
  AlarmTimePayload;

export const AddAlarmEndingTime: (
  param: AlarmTimePayload,
) => AddAlarmEndingTimeAction = ({ time }) => ({
  type: ActionTypes.ADD_ALARM_ENDING_TIME,
  time,
});

export type ToggleAlarmAction = Action<ActionTypes.TOGGLE_ALARM>;

export const ToggleAlarm: () => ToggleAlarmAction = () => ({
  type: ActionTypes.TOGGLE_ALARM,
});

interface ToggleDayPayload {
  day: Days;
}

export type ToggleDayAction = Action<ActionTypes.TOGGLE_DAY> & ToggleDayPayload;

export const ToggleDay: (targetDay: Days) => ToggleDayAction = (targetDay) => ({
  type: ActionTypes.TOGGLE_DAY,
  day: targetDay,
});

interface SelectAlarmSoundPayload {
  sound: SoundFile;
}

export type SelectAlarmSoundAction = Action<ActionTypes.SELECT_SOUND> &
  SelectAlarmSoundPayload;

export const SelectAlarmSound: (sound: SoundFile) => SelectAlarmSoundAction = (
  sound,
) => ({
  type: ActionTypes.SELECT_SOUND,
  sound,
});

export type ToggleAlarmVibrationAction = Action<ActionTypes.TOGGLE_VIBRATION>;

export const ToggleAlarmVibration: () => ToggleAlarmVibrationAction = () => ({
  type: ActionTypes.TOGGLE_VIBRATION,
});

export type AllActions =
  | AddAlarmStartingTimeAction
  | AddAlarmEndingTimeAction
  | ToggleAlarmAction
  | ToggleDayAction
  | SelectAlarmSoundAction
  | ToggleAlarmVibrationAction;
