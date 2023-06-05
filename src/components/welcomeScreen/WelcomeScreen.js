import React from "react";
import { styles } from "./styles";
import { View, Image, Text, SafeAreaView } from "react-native";
import Button from "../common/button/Button";

const WelcomeScreen = () => {
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
        <Button text="LOGIN" color="primary" />

        <Button text="REGISTER" color="secondary" />
      </View>
    </View>
  );
};

export default WelcomeScreen;
