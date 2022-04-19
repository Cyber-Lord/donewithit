import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Platform,
  StatusBar,
} from "react-native";

import AppText from "../components/AppText";
import colors from "../config/colors";

function Card({ image, title, subTitle }) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.textContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    top: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    height: 270,
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 40,
    margin: 15,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "65%",
  },
  subTitle: {
    color: colors.secondary,
  },
  textContainer: {
    padding: 10,
    marginLeft: 10,
  },
  title: {
    marginVertical: 10,
  },
});
export default Card;
