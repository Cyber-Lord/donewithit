import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Image } from "react-native-expo-image-cache";

import AppText from "../components/AppText";
import colors from "../config/colors";

function Card({ imageUrl, title, subTitle, onPress, thumbnailUrl }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image
          uri={imageUrl}
          preview={{ uri: thumbnailUrl }}
          style={styles.image}
          tint="light"
        />
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
