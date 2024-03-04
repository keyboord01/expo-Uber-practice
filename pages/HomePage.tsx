import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import NavOptions from "../components/navOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slice/navSlice";
import NavFavorites from "../components/NavFavorites";

const HomePage = ({ route }: { route: any }) => {
  const userName = route.params?.userName;

  const dispatch = useDispatch();
  return (
    <SafeAreaView className=" h-full ">
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
        <GooglePlacesAutocomplete
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          minLength={2}
          enablePoweredByContainer={false}
          fetchDetails={true}
          onPress={(data, details = null) => {
            if (details && details.geometry && details.geometry.location) {
              dispatch(
                setOrigin({
                  location: details.geometry.location,
                  description: data.description,
                })
              );
              dispatch(setDestination(null));
            } else {
            }
          }}
          placeholder="Where From"
          nearbyPlacesAPI="GooglePlacesSearch"
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
        />
        <NavOptions />
        <NavFavorites useForDestination={false} />
      </View>
    </SafeAreaView>
  );
};

export default HomePage;
