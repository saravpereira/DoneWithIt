import React from "react";
import * as Yup from "yup";
import Screen from "../common/screen/Screen";
import { styles } from "./styles";
import { AppForm, SubmitButton, AppFormField } from "../common/form";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const RegistrationScreen = () => {
  return (
    <Screen style={styles.container}>
        <AppForm
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <>
            <AppFormField
              name="name"
              placeholder="Name"
              icon="account"
              autoCapitalize="none"
              autoCorrect={false}
            />
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

            <SubmitButton text="REGISTER" />
          </>
        </AppForm>
    </Screen>
  );
};

export default RegistrationScreen;
