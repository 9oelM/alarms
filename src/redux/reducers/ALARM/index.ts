import { Reducer } from "redux";
import { AllActions } from "../../actions/ALARM";
import { ActionTypes } from "@/redux/actions/ALARM/actionTypes";
import { Days } from '@/typings';
import { SoundFile } from '@/constants/sounds';

export interface AlarmState {
  alarmStartingTime: Date;
  alarmEndingTime: Date;
  isAlarmEnabled: boolean;
  alarmEnabledDays: {
    // eslint-disable-next-line prettier/prettier
    [key in Days]: boolean;
  };
  selectedAlarmSound: SoundFile;
  isAlarmVibrationEnabled: boolean;
  alarmIntervalInMins: number;
}

const defaultState: AlarmState = {
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
  selectedAlarmSound: { displayedName: `None`, fileName: `None` },
  isAlarmVibrationEnabled: false,
  alarmIntervalInMins: 10,
};

export const Alarm: Reducer<AlarmState, AllActions> = (
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
    case ActionTypes.SELECT_SOUND:
        return {
          ...state,
          selectedAlarmSound: action.sound,
      };
    case ActionTypes.TOGGLE_VIBRATION:
      return {
        ...state,
        isAlarmVibrationEnabled: !state.isAlarmVibrationEnabled,
    };
    case ActionTypes.CHANGE_ALARM_INTERVAL:
      return {
        ...state,
        alarmIntervalInMins: action.alarmIntervalInMins,
    };
    default:
      return state;
  }
};
