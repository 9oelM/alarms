import { ActionTypes } from "./actionTypes";
import { Action } from "redux";

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

export type Days = `Mon` | `Tue` | `Wed` | `Thu` | `Fri` | `Sat` | `Sun`;

export const ToggleDay: (targetDay: Days) => ToggleDayAction = (targetDay) => ({
  type: ActionTypes.TOGGLE_DAY,
  day: targetDay,
});

export type AllActions =
  | AddAlarmStartingTimeAction
  | AddAlarmEndingTimeAction
  | ToggleAlarmAction
  | ToggleDayAction;
