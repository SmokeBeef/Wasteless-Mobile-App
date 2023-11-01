import { View, Text, Alert, ActivityIndicator, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";

import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

import tw from "twrnc";
import { Button } from "react-native";

const Map = ({ navigation }) => {
  const [location, setLocation] = useState();
  const [nameLocation, setNameLocation] = useState();

  //   const getLocation =

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission to access location was denied");
        navigation.navigate("Add");
        return;
      }

    

      const  location = await Location.getCurrentPositionAsync({
        accuracy: Location.LocationAccuracy.Highest,
      });
      const name = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
      console.log(name);
      const nameLok = `Provinsi ${name[0].region}, ${name[0].subregion}, ${name[0].city}, desa ${name[0].district}, ${name[0].street}`;
      setNameLocation(nameLok);
      console.log(location);
    })();
  }, []);

  if (!location)
    return (
      <ActivityIndicator
        style={tw`flex-1 justify-center items-center`}
        size={"large"}
      />
    );
  console.log(location);
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <MapView
        provider="google"
        initialRegion={location}
        style={tw`-z-10 w-[${Dimensions.get("window").width}px] h-[${
          Dimensions.get("window").height
        }px]`}
      >
        <Marker
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
          title="Marker"
        />
      </MapView>

      <Button
        title={"Ini Koordinat Saya"}
        onPress={() =>
          navigation.navigate({
            name: "Add",
            params: { ...location, nameLocation: nameLocation },
          })
        }
      />
    </View>
  );
};

export default Map;
