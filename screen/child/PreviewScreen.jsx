import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import React from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import tw from "twrnc";
import { Button } from "react-native";
import ButtonFull from "../../components/child/ButtonFull";

export default function PreviewScreen({ route }) {
  const data = route.params.data
  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <Image style={style.img} source={data.img} />
      <BottomSheet snapPoints={["40%", "80%"]} >
        <BottomSheetView>
          <Text>{route.params.data.nama}</Text>
        </BottomSheetView>
      </BottomSheet>

      <ButtonFull title={"Pinjam"}  />
    </View>
  );
}


const style = StyleSheet.create({
  img: {
    resizeMode: "contain",
    height: "80%"
  }
})