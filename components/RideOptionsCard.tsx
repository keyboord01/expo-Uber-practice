import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectTravelTimeInformation } from "../slice/navSlice";

type RideOption = {
  id: string;
  title: string;
  multiplier: number;
  image: string;
};

const data = [
  {
    id: "Uber-X-123",
    title: "UberX",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "Uber-XL-456",
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "Uber-LUX-789",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf",
  },
];

const RideOptionsCard = () => {
  const navigation = useNavigation();

  const [selected, setSelected] = useState<RideOption | null>(null);

  const travelTimeInformation = useSelector(selectTravelTimeInformation);

  const calculateTaxiFare = (distanceText: any) => {
    if (!distanceText) return "N/A";
    const distanceInKm = parseFloat(distanceText.replace("km", ""));
    const openingFee = 24.55;
    const costPerKm = 17.61;
    const shortDistanceFee = "90 - 120";

    if (distanceInKm <= 5.1) {
      return shortDistanceFee;
    } else {
      const fare = openingFee + distanceInKm * costPerKm;
      return fare.toFixed(2);
    }
  };

  // Ensure we have distance information to calculate the fare
  const fareText = travelTimeInformation?.distance?.text
    ? calculateTaxiFare(travelTimeInformation.distance.text)
    : "N/A";

  return (
    <SafeAreaView className="flex-grow bg-white">
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigateCard" as never)}
          className="absolute top-3 left-5 p-3 rounded-full z-50"
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text className="text-center py-5 text-xl">
          Select a ride - {travelTimeInformation?.distance?.text}
        </Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const estimatedPrice =
            fareText !== "N/A" && !fareText.includes("-")
              ? (parseFloat(fareText) * item.multiplier).toFixed(2)
              : fareText;

          return (
            <TouchableOpacity
              onPress={() => setSelected(item)}
              className={`flex-row items-center justify-between px-10 ${
                item.id === selected?.id && "bg-gray-200"
              }`}
            >
              <Image
                style={{
                  width: 100,
                  height: 100,
                  resizeMode: "contain",
                }}
                source={{ uri: item.image }}
              />
              <View>
                <Text className="text-xl font-semibold">{item.title}</Text>
                <Text>{travelTimeInformation?.duration?.text} travel time</Text>
              </View>
              <Text className="text-xl">{estimatedPrice} TL</Text>
            </TouchableOpacity>
          );
        }}
      />
      <View>
        <TouchableOpacity
          disabled={!selected}
          className={`bg-black py-3 m-3 ${!selected ? " opacity-30" : ""}`}
        >
          <Text className="text-center text-white text-xl">
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;
