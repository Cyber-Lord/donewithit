import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

import AppButton from "../components/AppButton";
import colors from "../config/colors";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
      blurRadius={10}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagline}>Sell What You Don't Need!</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="login" />
        <AppButton
          title="register"
          style={{ backgroundColor: colors.secondary }}
        />
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    width: "100%",
    padding: 20,
  },
  loginButton: {
    backgroundColor: "#fc5c65",
    height: 70,
    width: "100%",
  },
  logo: {
    height: 100,
    width: 100,
  },
  logoContainer: {
    top: 70,
    position: "absolute",
    alignItems: "center",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ECDC4",
  },
  tagline: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
});

export default WelcomeScreen;
