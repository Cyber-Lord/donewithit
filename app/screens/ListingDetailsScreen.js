import React from "react";
import { StyleSheet, View, KeyboardAvoidingView } from "react-native";
import { Image } from "react-native-expo-image-cache";

import AppText from "../components/AppText";
import colors from "../config/colors";

function ListingDetailsScreen({ route }) {
  const listing = route.params;

  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
    >
      <View style={styles.container}>
        <Image
          style={styles.image}
          preview={{ uri: listing.images[0].thumbnailUrl }}
          tint="light"
          uri={listing.images[0].url}
        />
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.subTitle}>${listing.price}</AppText>
        <View style={styles.userContainer}>
          <Image
            style={styles.userImage}
            source={require("../assets/mosh.jpg")}
          />
          <View style={styles.userProfile}>
            <AppText style={styles.name}>Mosh Hamedani</AppText>
            <AppText style={styles.listings}>5 Listings</AppText>
          </View>
        </View>
        <ContactSellerForm listing={listing} />
      </View>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 250,
  },
  listings: {
    color: "#000",
    marginVertical: 5,
  },
  name: {
    color: colors.black,
    fontSize: 20,
    fontWeight: "300",
  },
  subTitle: {
    marginLeft: 20,
    marginVertical: 10,
    fontSize: 22,
    color: colors.secondary,
  },
  title: {
    color: colors.black,
    fontSize: 22,
    fontWeight: "600",
    paddingTop: 20,
    paddingLeft: 20,
  },
  userContainer: {
    flexDirection: "row",
    width: "100%",
    height: 90,
    marginVertical: 25,
    paddingLeft: 10,
  },
  userImage: {
    height: 90,
    width: 90,
    borderRadius: 45,
  },
  userProfile: {
    flexDirection: "column",
    marginLeft: 15,
  },
});
export default ListingDetailsScreen;
