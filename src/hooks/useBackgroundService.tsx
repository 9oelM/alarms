import { useEffect } from "react";
import { AppState, AppStateStatus } from "react-native";
import { Heartbeat } from "@/util/Heartbeat";

export const useBackgroundService = () => {
  useEffect(() => {
    const heartbeat: (state: AppStateStatus) => void = (appState) => {
      if (appState === `active`) {
        Heartbeat.stopService();
        return;
      }

      Heartbeat.startService();
    };
    AppState.addEventListener(`change`, heartbeat);

    return () => {
      Heartbeat.stopService();
      AppState.removeEventListener(`change`, heartbeat);
    };
  });
};
