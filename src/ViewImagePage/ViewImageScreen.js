import React from "react";
import { styles } from "./styles";
import { View, Image, SafeAreaView, StatusBar } from "react-native";

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Image
        style={styles.backgroundImg}
        source={require("../../assets/chair.jpg")}
      />
      <SafeAreaView style={styles.headerContiner}>
        <View style={styles.buttonContainer}>
          <View style={styles.accept} />
          <View style={styles.deny} />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ViewImageScreen;
