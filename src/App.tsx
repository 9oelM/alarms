import "react-native-gesture-handler";
import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import { DarkModeProvider } from "react-native-dark-mode";

import { configureStore } from "./redux/store";

import { AlarmSetting } from "@/Pages/AlarmSetting";
import { withSafeAreaView } from "@/util/withSafeAreaView";
import { PersistGate } from "redux-persist/integration/react";

const { getStore, getPersistor } = configureStore();
const Stack = createStackNavigator();

const App: FC = () => {
  const store = getStore();
  const persistor = getPersistor();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <DarkModeProvider>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}>
              {/* <Stack.Screen name="Alarms" component={Landing} /> */}
              <Stack.Screen
                name="AlarmSetting"
                component={withSafeAreaView(AlarmSetting)}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </DarkModeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
