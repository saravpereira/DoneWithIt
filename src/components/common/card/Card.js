import React from "react";
import { styles } from "./styles";
import { View, Image } from "react-native";
import AppText from "../text/AppText";

const Card = ({ title, subtitle, image }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.productDetailSection}>
        <AppText style={styles.title} numberOfLines={2}>{title}</AppText>
        <AppText style={styles.pricing} numberOfLines={1}>{subtitle}</AppText>
      </View>
    </View>
  );
};

export default Card;
