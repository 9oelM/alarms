import { Reducer } from "redux";
import { AllActions } from "@/redux/actions/HEARTBEAT";
import { ActionTypes } from "@/redux/actions/HEARTBEAT/actionTypes";

export interface HeartbeatState {
  heartbeat: boolean;
}

const defaultState: HeartbeatState = {
  heartbeat: false,
};

export const Heartbeat: Reducer<HeartbeatState, AllActions> = (
  state = defaultState,
  action,
) => {
  switch (action.type) {
    case ActionTypes.CONTINUE_HEARTBEAT:
      return {
        ...state,
        heartbeat: !state.heartbeat,
      };
    default:
      return state;
  }
};
