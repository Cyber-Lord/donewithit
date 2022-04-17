import React from "react";
import { Text, StyleSheet, Platform } from "react-native";
function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: "#000",
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontFamily: "Avenir",
      },
      android: {
        fontFamily: "Roboto",
        fontSize: 18,
      },
    }),
  },
});
export default AppText;
