import React from "react";
import { Image, View } from "react-native";
import * as Yup from "yup";
import Screen from "../common/screen/Screen";
import { styles } from "./styles";
import { AppForm, SubmitButton, AppFormField } from "../common/form";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../../../assets/logo-red.png")}
        />
        <AppForm
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <>
            <AppFormField
              name="email"
              placeholder="Email"
              icon="email"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              textContentType="emailAddress"
            />

            <AppFormField
              name="password"
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              placeholder="Password"
              secureTextEntry
              textContentType="password"
            />

            <SubmitButton text="LOGIN" />
          </>
        </AppForm>
    </Screen>
  );
};

export default LoginScreen;
