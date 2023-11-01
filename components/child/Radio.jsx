import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { COLORS, FONT_FAMILY } from "../../constants";

const Radio = ({ text, active, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        ...style.container,
        backgroundColor: active ? COLORS.green : "#E9E9E9",
      }}
      onPress={() => onPress()}
    >
      <Text style={style.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    // width: 40,
    // height: 40,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: FONT_FAMILY.PoppinsMedium,
    fontSize: 12,
    color: "#5F5F5F",
  },
});

export default Radio;
