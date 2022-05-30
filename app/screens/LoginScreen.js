import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
  AppForm,
  AppFormField,
  ErrorMessages,
  SubmitButton,
} from "../components/forms";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  const auth = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login(email, password);
    if (!result.ok) return setLoginFailed(true);
    auth.logIn(result.data);
  };

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessages error="Inalid Email or Password" visible={loginFailed} />
        <AppFormField
          name="email"
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          placeholder="Email"
        />

        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
        />

        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  );
}
const styles = StyleSheet.create({
  logo: {
    height: 80,
    width: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 30,
  },
  container: {
    padding: 10,
  },
});
export default LoginScreen;
