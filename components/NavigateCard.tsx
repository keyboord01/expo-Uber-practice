import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination } from "../slice/navSlice";
import { useNavigation } from "@react-navigation/native";
import NavFavorites from "./NavFavorites";
import { Icon } from "react-native-elements";

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const getGreetingTime = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  const greeting = getGreetingTime(); // Use the function to get the current greeting

  return (
    <SafeAreaView className="bg-white flex-1">
      <Text className="text-center py-5 text-xl">{greeting}, "Name"</Text>
      <View className="border-t border-gray-200 flex-shrtink">
        <View>
          <GooglePlacesAutocomplete
            styles={{
              container: {
                flex: 0,
                backgroundColor: "white",
                paddingTop: 20,
              },
              textInput: {
                backgroundColor: "#DDDDDF",
                borderRadius: 0,
                fontSize: 18,
              },
              textInputContainer: {
                paddingHorizontal: 20,
                paddingBottom: 0,
              },
            }}
            placeholder="Where to?"
            fetchDetails={true}
            debounce={400}
            nearbyPlacesAPI="GooglePlacesSearch"
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details?.geometry?.location,
                  description: data.description,
                })
              );
              navigation.navigate("RideOptionsCard" as never);
            }}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: "en",
            }}
          />
        </View>
        <NavFavorites useForDestination={true} />
      </View>
      <View className="flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100">
        <TouchableOpacity
          className="flex-row flex bg-black w-24 py-3 px-4 rounded-full justify-between"
          onPress={() => navigation.navigate("RideOptionsCard" as never)}
        >
          <Icon name="car" type="font-awesome" color="white" size={16} />
          <Text className="text-white text-center">Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row flex  w-24 py-3 px-4 rounded-full justify-between">
          <Icon
            name="fast-food-outline"
            type="ionicon"
            color="black"
            size={16}
          />
          <Text className=" text-center">Eats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;
