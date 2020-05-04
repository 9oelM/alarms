import { combineReducers } from "redux";
import { Alarm, AlarmState } from "./ALARM";
import { Heartbeat, HeartbeatState } from "./HEARTBEAT";

export const rootReducer = combineReducers({
  Alarm,
  Heartbeat,
});

export type RootState = {
  Alarm: AlarmState,
  Heartbeat: HeartbeatState,
};
