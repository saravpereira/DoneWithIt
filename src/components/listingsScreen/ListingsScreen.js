import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableWithoutFeedback, View } from "react-native";
import { styles } from "./styles";
import Card from "../common/card/Card";
import Screen from "../common/screen/Screen";
import routes from "../navigation/routes";

const sample = [
  {
    id: 1,
    title: "Red Jacket For Sale",
    subtitle: "$100",
    image: require("../../../assets/jacket.jpg"),
    avatar: require("../../../assets/mosh.jpg"),
    listingUserFullname: "Mosh Pit",
    numberOfListing: 5,
  },
  {
    id: 2,
    title: "Couch in great condition!",
    subtitle: "$1000",
    image: require("../../../assets/couch.jpg"),
    avatar: require("../../../assets/mosh.jpg"),
    listingUserFullname: "Mosh Pit",
    numberOfListing: 5,
  },
];

const ListingsScreen = () => {
  const [cards, setCards] = useState(sample);
  const navigation = useNavigation();

  return (
    <Screen style={styles.content}>
      {cards.map((item) => {
        return (
          <TouchableWithoutFeedback
            onPress={() =>
              navigation.navigate(routes.LISTING_DETAILS, {
                title: item.title,
                subtitle: item.subtitle,
                image: item.image,
                listingUserFullname: item.listingUserFullname,
                numberOfListing: item.numberOfListing,
                avatar: item.avatar,
              })
            }
            key={item.id}
          >
            <View>
              <Card
                title={item.title}
                subtitle={item.subtitle}
                image={item.image}
              />
            </View>
          </TouchableWithoutFeedback>
        );
      })}
    </Screen>
  );
};

export default ListingsScreen;
