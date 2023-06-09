import React, { useState } from "react";
import { FlatList, View, Image } from "react-native";
import Screen from "../common/screen/Screen";
import { styles } from "./styles";
import Card from "../common/card/Card";

const sample = [
  {
    id: 1,
    title: "Red Jacket For Sale",
    subtitle: "$100",
    image: require("../../../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition!",
    subtitle: "$1000",
    image: require("../../../assets/couch.jpg"),
  },
];

const ListingsScreen = () => {
  const [cards, setCards] = useState(sample);

  return (
    <View style={styles.container}>
      <Screen>
        <View style={styles.content}>
          {cards.map((item) => {
            return (
              <Card
                title={item.title}
                subtitle={item.subtitle}
                image={item.image}
                key={item.id}
              />
            );
          })}
        </View>
      </Screen>
    </View>
  );
};

export default ListingsScreen;
