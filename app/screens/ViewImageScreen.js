import React from "react";
import { Image, StyleSheet, View } from "react-native";

import colors from "../config/colors";

function ViewImageScreen(props) {
  return (
    <View style={styles.background}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image
        style={styles.chair}
        resizeMode="contain"
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.black,
  },
  chair: {
    height: "100%",
    width: "100%",
  },
  closeIcon: {
    height: 50,
    width: 50,
    backgroundColor: colors.primary,
    position: "absolute",
    top: 30,
    left: 30,
  },
  deleteIcon: {
    height: 50,
    width: 50,
    backgroundColor: colors.secondary,
    position: "absolute",
    right: 30,
    top: 30,
  },
});
export default ViewImageScreen;
