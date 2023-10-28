import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../../constants/theme";

import tw from "twrnc";

const ButtonFull = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      title={title}
      style={tw`bg-[${COLORS.green}] absolute bottom-[25px] w-auto right-[25px] left-[25px] rounded-full py-4 items-center`}
      onPress={() => onPress()}
    >
      <Text style={{ ...style.font, color: COLORS.white }}>{title}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  font: {
    fontFamily: "PoppinsSemiBold",
  },
 
});

export default ButtonFull;
