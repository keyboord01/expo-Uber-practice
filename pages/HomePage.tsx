import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import NavOptions from "../components/navOptions";

const HomePage = () => {
  return (
    <SafeAreaView className="bg-red h-full ">
      <View className="p-5">
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomePage;
