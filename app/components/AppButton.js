import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";

function AppButton({ title, style, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 60,
    width: "100%",
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    color: colors.white,
    textTransform: "uppercase",
  },
});
export default AppButton;
