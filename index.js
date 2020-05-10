/**
 * @format
 */

import { AppRegistry } from "react-native";
import App, { store } from "./src/App";
import { ContinueHeartbeat } from "./src/redux/actions/HEARTBEAT";
import { name as appName } from "./app.json";
import { backgroundHeartbeat } from "@/background/background";

AppRegistry.registerComponent(appName, () => App);

let ran = false;

const headlessTask = async () => {
  if (!ran) {
    store.subscribe(() => {
      console.log(store.getState().Alarm);
      backgroundHeartbeat(store.getState())
      store.dispatch(ContinueHeartbeat());
    })
    ran = true;
  }
};

AppRegistry.registerHeadlessTask(`Heartbeat`, () => headlessTask);
