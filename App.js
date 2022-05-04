import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen from "./app/components/Screen";
import AppNavigator from "./app/navigations/AppNavigator";
import navigationTheme from "./app/navigations/navigationTheme";

const TweetDetails = () => (
  <Screen>
    <Text>TweeterDetails</Text>
  </Screen>
);
const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweeters</Text>
    <Button
      title="Details"
      onPress={() => navigation.navigate("TweetDetails")}
    ></Button>
  </Screen>
);

const Stack = createNativeStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "dodgerblue" },
      headerTintColor: "white",
    }}
  >
    <Stack.Screen
      name="Tweets"
      component={Tweets}
      options={{
        headerStyle: { backgroundColor: "dodgerblue" },
        headerTintColor: "white",
      }}
    />
    <Stack.Screen name="TweetDetails" component={TweetDetails} />
  </Stack.Navigator>
);
const Account = () => (
  <Screen>
    <Text>Account</Text>
  </Screen>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Feed" component={Tweets} />
    <Tab.Screen name="Accounts" component={Account} />
  </Tab.Navigator>
);
function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}

export default App;
