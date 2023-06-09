import React, { useState } from "react";
import { FlatList, View, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen from "../common/screen/Screen";
import ListItem from "../common/listItem/ListItem";
import ListItemSeparator from "../common/listItemSeparator/ListItemSeparator";
import { styles } from "./styles";

const sampleUser = {
  id: 1,
  title: "Mosh",
  description: "programmingwithmosh@gmail.com",
  image: (
    <Image style={styles.avatar} source={require("../../../assets/mosh.jpg")} />
  ),
};

const accountFeatures = [
  {
    id: 1,
    title: "My Listings",
    description: "",
    image: (
      <View style={styles.listingIconContainer}>
        <MaterialCommunityIcons
          name="format-list-bulleted"
          size={20}
          color="white"
        />
      </View>
    ),
  },
  {
    id: 2,
    title: "My Messages",
    description: "",
    image: (
      <View style={styles.emailIconContainer}>
        <MaterialCommunityIcons name="email" size={20} color="white" />
      </View>
    ),
  },
];

const MyAccountScreen = () => {
  const [messages, setMessages] = useState(sampleUser);
  const [settings, setSettings] = useState(accountFeatures);

  return (
    <View style={styles.container}>
      <Screen>
        <View style={styles.userDetailSection}>
          <ListItem
            title={messages.title}
            description={messages.description}
            avatar={messages.image}
            onPress={() => console.log("Message sent", item)}
          />
        </View>

        <FlatList
          style={styles.flatlist}
          data={settings}
          keyExtractor={(settings) => settings.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              description={item.description}
              avatar={item.image}
              onPress={() => console.log("Message sent", item)}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />

        <View style={styles.section}>
          <ListItem
            title="Log Out"
            description=""
            avatar={
              <View style={styles.logoutIconContainer}>
                <MaterialCommunityIcons name="logout" size={20} color="white" />
              </View>
            }
            onPress={() => console.log("Message sent", item)}
          />
        </View>
      </Screen>
    </View>
  );
};

export default MyAccountScreen;
