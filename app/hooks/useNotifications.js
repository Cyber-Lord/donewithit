import { useEffect } from "react";
import * as Notifications from "expo-notifications";
import * as Permission from "expo-permissions";

import expoPushTokensApi from "../api/expoPushTokens";

export default useNotifications = (notificationListener) => {
  useEffect(() => {
    registerForPushNotification();

    if (notificationListener)
      Notifications.addNotificationReceivedListener(notificationListener);
  }, []);
  const registerForPushNotification = async () => {
    try {
      const permission = await Permission.askAsync(Permission.NOTIFICATIONS);
      if (!permission.granted) return;

      const token = await Notifications.getExpoPushTokenAsync();
      expoPushTokensApi.register(token);
    } catch (error) {
      console.log("Error getting push notification", error);
    }
  };
};
