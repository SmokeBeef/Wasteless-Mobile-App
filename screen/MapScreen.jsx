import { View, Text, Dimensions } from "react-native";
import React from "react";
import { data } from "./data/data";
import tw from "twrnc";
import MapView, { Marker } from "react-native-maps";

const MapScreen = () => {
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <MapView
        provider="google"
        initialRegion={{
          latitude: -7.955769339135371,
          longitude: 112.64355405328047,
          latitudeDelta: 1,
          longitudeDelta: 1,
        }}
        style={tw`-z-10 w-[${Dimensions.get("window").width}px] h-[${
          Dimensions.get("window").height
        }px]`}
      >
        {data.map((val, index) => 
            val.maps && (
              <Marker
                key={index}
                coordinate={{
                  latitude: val.maps.latitude,
                  longitude: val.maps.longitude,
                }}
                title={val.nama}
              />
            )
          )
        }
      </MapView>
    </View>
  );
};

export default MapScreen;
