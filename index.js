/**
 * @format
 */

import { AppRegistry } from "react-native";
import App, { store } from "./src/App";
import { ContinueHeartbeat } from "./src/redux/actions/HEARTBEAT";
import { name as appName } from "./app.json";
import { backgroundHeartbeat } from "@/background/background";

AppRegistry.registerComponent(appName, () => App);

const headlessTask = async (a) => {
  /**
   * @todo Check alarm here
   */
  backgroundHeartbeat(store.getState());
  store.dispatch(ContinueHeartbeat());
};

AppRegistry.registerHeadlessTask(`Heartbeat`, () => headlessTask);
