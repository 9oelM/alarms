import { Action } from "redux";
import { ActionTypes } from "./actionTypes";

export type ContinueHeartbeatAction = Action<ActionTypes.CONTINUE_HEARTBEAT>;

export const ContinueHeartbeat: () => ContinueHeartbeatAction = () => ({
  type: ActionTypes.CONTINUE_HEARTBEAT,
});

export type AllActions = ContinueHeartbeatAction;
