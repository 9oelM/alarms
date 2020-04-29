import { Reducer } from "redux";
import { AllActions, Days } from "../actions";
import { ActionTypes } from "@/redux/actions/actionTypes";

export interface RootState {
  alarmStartingTime: Date;
  alarmEndingTime: Date;
  isAlarmEnabled: boolean;
  alarmEnabledDays: {
    [key in Days]: boolean;
  };
}

const defaultState: RootState = {
  alarmStartingTime: new Date(),
  alarmEndingTime: new Date(new Date().getTime() + 1000 * 60 * 60),
  isAlarmEnabled: false,
  alarmEnabledDays: {
    'Mon': false,
    'Tue': false,
    'Wed': false,
    'Thu': false,
    'Fri': false,
    'Sat': false,
    'Sun': false,
  },
};

export const rootReducer: Reducer<RootState, AllActions> = (
  state = defaultState,
  action,
) => {
  switch (action.type) {
    case ActionTypes.ADD_ALARM_STARTING_TIME:
      return {
        ...state,
        alarmStartingTime: action.time,
      };
    case ActionTypes.ADD_ALARM_ENDING_TIME:
      return {
        ...state,
        alarmEndingTime: action.time,
      };
    case ActionTypes.TOGGLE_ALARM:
      return {
        ...state,
        isAlarmEnabled: !state.isAlarmEnabled,
      };
    case ActionTypes.TOGGLE_DAY:
      return {
        ...state,
        alarmEnabledDays: {
          ...state.alarmEnabledDays,
          [action.day]: !state.alarmEnabledDays[action.day],
        },
      };
    default:
      return state;
  }
};
