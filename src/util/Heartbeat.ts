import { NativeModules, NativeModulesStatic } from "react-native";

export interface HeartbeatNativeModules extends NativeModulesStatic {
  Heartbeat: {
    startService(): void,
    stopService(): void,
  };
}

export const { Heartbeat }: HeartbeatNativeModules = <HeartbeatNativeModules>NativeModules;
