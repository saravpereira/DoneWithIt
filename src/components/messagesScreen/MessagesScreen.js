import React, { useState } from "react";
import { FlatList, Image } from "react-native";
import Screen from "../common/screen/Screen";
import ListItem from "../common/lists/listItem/ListItem";
import ListItemSeparator from "../common/lists/listItemSeparator/ListItemSeparator";
import ListItemDeleteAction from "../common/lists/listItemDeleteAction/ListItemDeleteAction";
import { styles } from "./styles";

const sample = [
  {
    id: 1,
    title: "Mosh",
    description: "5 Listings",
    image: (
      <Image
        style={styles.avatar}
        source={require("../../../assets/mosh.jpg")}
      />
    ),
  },
  {
    id: 2,
    title: "Mosh",
    description: "5 Listings",
    image: (
      <Image
        style={styles.avatar}
        source={require("../../../assets/mosh.jpg")}
      />
    ),
  },
];

const MessagesScreen = () => {
  const [messages, setMessages] = useState(sample);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    const newMessages = messages.filter((item) => item.id !== message.id);
    setMessages(newMessages);
  };
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
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {}}
      />
    </Screen>
  );
};

export default MessagesScreen;
