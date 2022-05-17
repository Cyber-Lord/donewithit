import React, { useState } from "react";
import { Modal, StyleSheet, View } from "react-native";
import * as Progress from "react-native-progress";
import LottieView from "lottie-react-native";

import colors from "../config/colors";
import AppButton from "../components/AppButton";

function UploadScreen({ onDone, progress = 0, visible = false }) {
  const [myVisible, setMyVisible] = useState(visible);

  return (
    <Modal visible={myVisible}>
      {/* Work on this below is wrong */}
      <AppButton title="Close" onPress={() => setMyVisible(false)} />
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar
            color={colors.primary}
            progress={progress}
            width={200}
          />
        ) : (
          <LottieView
            autoPlay
            loop={false}
            onAnimationFinish={onDone}
            source={require("../animations/redone.json")}
            style={styles.animation}
          />
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  animation: {
    width: 150,
  },
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default UploadScreen;
