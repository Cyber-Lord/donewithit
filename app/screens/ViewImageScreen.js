import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function ViewImageScreen(props) {
  return (
    <View style={styles.background}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color={"white"} size={45}/>
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons name="trash-can-outline" color={"white"} size={45}/>
      </View>
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
    position: "absolute",
    top: 30,
    left: 30,
  },
  deleteIcon: {
    position: "absolute",
    right: 30,
    top: 30,
  },
});
export default ViewImageScreen;
