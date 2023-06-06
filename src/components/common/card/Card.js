import React from "react";
import { styles } from "./styles";
import { View, Image, Text } from "react-native";

const Card = ({ title, subtitle, image }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.productDetailSection}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.pricing}>{subtitle}</Text>
      </View>
    </View>
  );
};

export default Card;
