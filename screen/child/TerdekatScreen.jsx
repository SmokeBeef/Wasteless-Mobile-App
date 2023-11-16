import {
  View,
  Text,
  ScrollView,
  FlatList,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";

import tw from "twrnc";
import Box from "../../components/inner/Box";
import img from "../../assets/images/fn1.jpg";
import img2 from "../../assets/images/fn2.jpg";
import { data } from "../data/data";
import { RefreshControl } from "react-native";
import "react-native-gesture-handler";
import { useIsFocused, useNavigation } from "@react-navigation/native";

export default function TerdekatScreen({ navigation }) {
  const focus = useIsFocused();
  useEffect(() => {}, [focus]);
  const navigate = useNavigation();
  return (
    <ScrollView
      refreshControl={<RefreshControl  />}
      style={tw`bg-[#FDFDFD] flex-1`}
    >
      <View
        style={tw`flex-row gap-y-[32px] justify-between flex-wrap mt-[24px]`}
      >
        {data.map(
          (val, index) =>
            !val.isPinjam && (
              <TouchableOpacity
                onPress={() =>
                  navigate.navigate("detail", {
                    data: val,
                  })
                }
                key={index}
              >
                <Box
                  distance={val.jarak}
                  img={val.img}
                  like={val.like}
                  rate={val.rating}
                  title={val.nama}
                  user={val.penyewa}
                  iLike={val.iLike}
                />
              </TouchableOpacity>
            )
        )}
      </View>

      <View style={tw`mt-10`}><Text>last</Text></View>
    </ScrollView>
  );
}
