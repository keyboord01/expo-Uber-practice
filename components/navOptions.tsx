import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

interface DataItem {
  id: string;
  title: string;
  image: string;
  page: string;
}

const data: DataItem[] = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    page: "MapPage",
  },
  {
    id: "456",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    page: "EatsPage",
  },
];

export default function () {
  const navigation = useNavigation();

  return (
    <View>
      <FlatList
        data={data}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(item.page as never)}
            className="p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40"
          >
            <View>
              <Image
                style={{ width: 120, height: 120, resizeMode: "contain" }}
                source={{ uri: item.image }}
              />
            </View>
            <Text className="text-lg mt-2 font-semibold">{item.title}</Text>
            <Icon
              type="antdesign"
              name="arrowright"
              color="white"
              className="p-2 bg-black  rounded-full w-10 mt-4"
            />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
