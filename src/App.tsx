import "react-native-gesture-handler";
import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import { DarkModeProvider } from "react-native-dark-mode";
import { PersistGate } from "redux-persist/integration/react";

import { configureStore } from "./redux/store";
import { Main } from "@/Pages/Main";
import { Sound } from "@/Pages/Sound";
import { withSafeAreaView } from "@/util/withSafeAreaView";
import { SOUND, MAIN } from "./constants/screens";
import { useAndroidBackgroundService } from "@/hooks/useAndroidBackgroundService";

const { getStore, getPersistor } = configureStore();
export const store = getStore();
export const persistor = getPersistor();

const Stack = createStackNavigator();

const App: FC = () => {
  useAndroidBackgroundService();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <DarkModeProvider>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}>
              <Stack.Screen name={MAIN} component={withSafeAreaView(Main)} />
              <Stack.Screen name={SOUND} component={withSafeAreaView(Sound)} />
            </Stack.Navigator>
          </NavigationContainer>
        </DarkModeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
