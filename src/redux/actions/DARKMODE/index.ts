import { Action } from 'redux';
import { ActionTypes } from './actionTypes';

export type ToggleDarkModeAction = Action<ActionTypes.TOGGLE_DARK_MODE>;

export const ToggleDarkMode: () => ToggleDarkModeAction = () => ({
  type: ActionTypes.TOGGLE_DARK_MODE,
});

export type AllActions = ToggleDarkModeAction;
