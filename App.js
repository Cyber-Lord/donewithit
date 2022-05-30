import React, { useState } from "react";
import { Text, Button, AsyncStorage } from "react-native";
import AppLoading from "expo-app-loading";

import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./app/navigations/AppNavigator";
import navigationTheme from "./app/navigations/navigationTheme";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthNavigator from "./app/navigations/AuthNavigator";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import { navigationRef } from "./app/navigations/rootNavigation";
import logger from "./app/utility/logger";

logger.start();

function App() {
  console.log(new Error("Error starting"));
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };
  if (!isReady)
    return (
      <AppLoading
        startAsync={restoreUser}
        onError={console.warn}
        onFinish={() => setIsReady(true)}
      />
    );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;
