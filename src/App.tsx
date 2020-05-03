import "react-native-gesture-handler";
import React, { FC, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import { DarkModeProvider } from "react-native-dark-mode";

import { configureStore } from "./redux/store";

import { Main } from "@/Pages/Main";
import { Sound } from "@/Pages/Sound";
import { withSafeAreaView } from "@/util/withSafeAreaView";
import { PersistGate } from "redux-persist/integration/react";
import { SOUND, MAIN } from "./constants/screens";
import { useBackgroundService } from "@/hooks/useBackgroundService";

const { getStore, getPersistor } = configureStore();
const Stack = createStackNavigator();

const App: FC = () => {
  const store = getStore();
  const persistor = getPersistor();

  useBackgroundService();

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
