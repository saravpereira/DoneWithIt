import React from "react";
import { styles } from "./styles";
import { View, Image, Text, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AppButton from "../common/button/AppButton";

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        style={styles.backgroundImg}
        source={require("../../../assets/background.jpg")}
      />
      <SafeAreaView style={styles.logoContainer}>
        <View style={styles.logoImgContainer}>
          <Image
            style={styles.logo}
            source={require("../../../assets/logo-red.png")}
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.text}>Sell What You Don't Need!</Text>
        </View>
      </SafeAreaView>

      <View style={styles.buttonsContainer}>
        <AppButton
          text="LOGIN"
          color="primary"
          onPress={() => navigation.navigate("LoginScreen")}
        />

        <AppButton
          text="REGISTER"
          color="secondary"
          onPress={() => navigation.navigate("RegistrationScreen")}
        />
      </View>
    </View>
  );
};

export default WelcomeScreen;
