import { Reducer } from "redux";
import { AllActions } from "@/redux/actions/DARKMODE";
import { ActionTypes } from "@/redux/actions/DARKMODE/actionTypes";

export interface DarkModeState {
  isOverridingDarkModeOn: boolean;
}

const defaultState: DarkModeState = {
  isOverridingDarkModeOn: true,
};

export const DarkMode: Reducer<DarkModeState, AllActions> = (
  state = defaultState,
  action,
) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_DARK_MODE:
      return {
        ...state,
        isOverridingDarkModeOn: !state.isOverridingDarkModeOn,
      };
    default:
      return state;
  }
};
