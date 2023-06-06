import React from "react";
import { styles } from "./styles";
import { View, Image, SafeAreaView, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Image
        style={styles.backgroundImg}
        source={require("../../../assets/chair.jpg")}
      />
      <SafeAreaView style={styles.headerContiner}>
        <View style={styles.buttonContainer}>
          <MaterialCommunityIcons name="close" size={30} color="white" />

          <MaterialCommunityIcons
            name="trash-can-outline"
            size={30}
            color="white"
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ViewImageScreen;
