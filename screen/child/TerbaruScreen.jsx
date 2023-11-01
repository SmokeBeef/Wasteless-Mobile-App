import { View, Text, ScrollView, RefreshControl } from "react-native";
import React from "react";

import tw from "twrnc";
import { data } from "../data/data";
import Box from "../../components/inner/Box";
import { useIsFocused } from "@react-navigation/native";
import { useEffect } from "react";

export default function TerbaruScreen() {
  const focus = useIsFocused();
  useEffect(() => {}, [focus]);
  return (
    <ScrollView
      refreshControl={<RefreshControl />}
      style={tw`bg-[#FDFDFD] flex-1`}
    >
      <View
        style={tw`flex-row gap-y-[32px] justify-between flex-wrap mt-[24px]`}
      >
        {data.map((val, index) =>
          !val.isPinjam ? (
            <Box
              key={index}
              distance={val.jarak}
              img={val.img}
              like={val.like}
              rate={val.rating}
              title={val.nama}
              user={val.penyewa}
              iLike={val.iLike}
            />
          ) : null
        )}
      </View>

      <View style={tw`mt-10`}></View>
    </ScrollView>
  );
}
