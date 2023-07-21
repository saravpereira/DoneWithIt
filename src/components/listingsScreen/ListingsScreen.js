import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableWithoutFeedback, View } from "react-native";
import { styles } from "./styles";
import Card from "../common/card/Card";
import Screen from "../common/screen/Screen";
import routes from "../navigation/routes";
import listingsApi from "../../api/listings";
import AppText from "../common/text/AppText";
import AppButton from "../common/button/AppButton";
import ActivityIndicator from "../activityIndicator/ActivityIndicator";

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
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    setLoading(true);
    const response = await listingsApi.getListings();
    setLoading(false);

    if (!response.ok) {
      return setError(true);
    }

    setError(false);
    setListings(response.data);
  };

  return (
    <Screen style={styles.content}>
      {error && (
        <>
          <AppText>Couldn't retrieve the listings</AppText>
          <AppButton text="Retry" onPress={loadListings} />
        </>
      )}
      <ActivityIndicator visible={loading} />
      {listings.map((item) => {
        return (
          <TouchableWithoutFeedback
            onPress={() =>
              navigation.navigate(routes.LISTING_DETAILS, {
                title: item.title,
                subtitle: item.subtitle,
                image: item["images"][0]["url"],
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
                image={item["images"][0]["url"]}
              />
            </View>
          </TouchableWithoutFeedback>
        );
      })}
    </Screen>
  );
};

export default ListingsScreen;
