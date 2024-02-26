import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

export default function () {
  const data = [
    {
      id: "123",
      title: "Get a ride",
      image: "https://links.papareact.com/3pn",
      screen: "MapScreen",
    },
    {
      id: "456",
      title: "Order food",
      image: "https://links.papareact.com/28w",
      screen: "EatsScreen",
    },
    // {
    //   id: "789",
    //   title: "Go to the shop",
    //   image: "https://links.papareact.com/6ff",
    // },
    // {
    //   id: "101",
    //   title: "Get a ride",
    //   image: "https://links.papareact.com/3pn",
    // },
  ];
  return (
    <View>
      <FlatList
        data={data}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity className="p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40">
            <View>
              <Image
                style={{ width: 120, height: 120, resizeMode: "contain" }}
                source={{ uri: item.image }}
              />
            </View>
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
