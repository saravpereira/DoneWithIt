import React from "react";
import Screen from "../common/screen/Screen";
import { FlatList, View } from "react-native";
import ListItem from "../common/listItem/ListItem";
import ListItemSeparator from "../common/listItemSeparator/ListItemSeparator";
import ListItemDeleteAction from "../common/listItemDeleteAction/ListItemDeleteAction";

const messages = [
  {
    id: 1,
    title: "Mosh",
    description: "5 Listings",
    image: require("../../../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "Mosh",
    description: "5 Listings",
    image: require("../../../assets/mosh.jpg"),
  },
];

const MessagesScreen = () => {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(messages) => messages.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            description={item.description}
            avatar={item.image}
            onPress={() => console.log("Message sent", item)}
            renderRightActions={ListItemDeleteAction}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
};

export default MessagesScreen;
