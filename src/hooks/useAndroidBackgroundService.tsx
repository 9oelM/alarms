import { useEffect } from "react";
import { AppState, AppStateStatus, Platform } from "react-native";
import { Heartbeat } from "@/util/Heartbeat";

export const useAndroidBackgroundService = () => {
  useEffect(() => {
    if (Platform.OS !== `android`) {
      return;
    }

    const heartbeat: (state: AppStateStatus) => void = (appState) => {
      if (appState === `active`) {
        Heartbeat.stopService();
        return;
      }

      Heartbeat.startService();
    };
    AppState.addEventListener(`change`, heartbeat);

    return () => {
      if (Platform.OS !== `android`) {
        return;
      }

      Heartbeat.stopService();
      AppState.removeEventListener(`change`, heartbeat);
    };
  });
};
