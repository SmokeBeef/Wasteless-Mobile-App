import { View, Text, Image, StyleSheet } from "react-native";
import React, { useState } from "react";

import tw from "twrnc";
import { COLORS, FONT_FAMILY } from "../../constants/theme";
import Gps from "../icon/Gps";
import Star from "../icon/Star";
import Love from "../icon/Love";
import LoveFill from "../icon/LoveFill";

const Box = ({ title, user, like, rate, distance, img, iLike }) => {
  const [love, setLove] = useState(iLike)
  return (
    <View style={style.container}>
      <View style={tw`absolute z-10 flex-row justify-between  w-[149px] mt-2`}>
        <View
          style={tw`flex-row bg-white rounded-lg items-center px-2 gap-1 ml-2 py-1`}
        >
          <Gps />
          <Text style={{ ...style.fontSemi, ...style.distance }}>
            {distance}
          </Text>
        </View>
        <View
          style={tw`flex-row bg-white rounded-lg items-center px-2 gap-1 mr-2 py-1`}
        >
          <Star />
          <Text style={{ ...style.fontSemi, ...style.rate }}>{rate}</Text>
        </View>
      </View>
      <Image style={style.img} source={img} />
      <Text numberOfLines={1}  style={{ ...style.fontSemi, ...style.title }}>{title}</Text>
      <Text style={{ ...style.font, ...style.user }}>{user}</Text>
      <View style={tw`justify-end items-center gap-[4px] flex-row mt-[8px]`}>
        <Text style={{ ...style.font }}>{like}</Text>
        {love ? <LoveFill onPress={() => setLove(false)} /> : <Love onPress={() => setLove(true)} />}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  font: {
    fontFamily: FONT_FAMILY.Poppins,
  },
  fontSemi: {
    fontFamily: FONT_FAMILY.PoppinsSemiBold,
  },
  container: {
    width: 149,
    height: 225,
    borderRadius: 12,
  },
  distance: {
    fontSize: 8,
  },
  rate: {
    fontSize: 8,
  },

  img: {
    height: 149,
    width: 149,
    resizeMode: "cover",
    borderRadius: 12,
  },
  title: {
    marginTop: 8,
  },
  user: {
    fontSize: 12,
    color: COLORS.gray,
    marginTop: -4,
  },
});

export default Box;
