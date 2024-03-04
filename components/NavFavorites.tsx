import {
  FlatList,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import { setOrigin, setDestination } from "../slice/navSlice"; // Ensure these actions are correctly imported
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: "123",
    icon: "home",
    location: "Home",
    destination: "NEF merter 13, Istanbul, Turkiye",
    coordinates: { lat: 41.0164538, lng: 28.9077061 },
  },
  {
    id: "456",
    icon: "briefcase",
    location: "Work",
    destination: "YTU Tekno Park, Istanbul, Turkiye",
    coordinates: { lat: 41.0191037, lng: 28.8932352 },
  },
];
const NavFavorites = ({ useForDestination = false }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleFavoritePress = (item: any) => {
    if (useForDestination) {
      dispatch(
        setDestination({
          location: item.coordinates,
          description: item.location,
        })
      );
      navigation.navigate("RideOptionsCard" as never);
    } else {
      dispatch(
        setOrigin({
          location: item.coordinates,
          description: item.location,
        })
      );
      navigation.navigate("MapPage" as never);
    }
  };

  return (
    <FlatList
      data={data}
      ItemSeparatorComponent={() => <View className="bg-gray-200 h-[0.5]" />}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => handleFavoritePress(item)}
          className="flex-row items-center p-5"
        >
          <Icon
            className="mr-4 rounded-full bg-gray-300 p-3"
            name={item.icon}
            type="ionicon"
            color="white"
            size={18}
          />
          <View>
            <Text className="font-semi-bold text-lg">{item.location}</Text>
            <Text className="text-gray-500">{item.destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavorites;
