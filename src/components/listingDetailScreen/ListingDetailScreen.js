import React from "react";
import { styles } from "./styles";
import { View, Image, Text } from "react-native";

const ListingDetailScreen = ({
  title,
  subtitle,
  image,
  avatar,
  listingUserFullname,
  numberOfListing,
}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.productDetailSection}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.pricing}>{subtitle}</Text>
      </View>

      <View style={styles.userDetail}>
        <Image style={styles.avatar} source={avatar} />
        <View style={styles.usernameAndListing}>
          <Text style={styles.username}>{listingUserFullname}</Text>
          <Text style={styles.listings}>{`${numberOfListing} Listing${
            numberOfListing > 1 ? "s" : ""
          }`}</Text>
        </View>
      </View>
    </View>
  );
};

export default ListingDetailScreen;
