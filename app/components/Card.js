import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

import AppText from "../components/AppText";
import colors from "../config/colors";

function Card({ imageUrl, title, subTitle, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <View style={styles.textContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 230,
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 20,
    overflow: "hidden",
    marginVertical: 10,
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
