import { View, Text } from "react-native";
import React from "react";
import ButtonFull from "../../components/child/ButtonFull";

import tw from "twrnc";
import Success from "../../components/icon/Success";
import { StyleSheet } from "react-native";
import { COLORS, FONT_FAMILY } from "../../constants";

export default function PeminjamanSuccessScreen({ navigation }) {
  return (
    <View style={tw`flex-1 items-center justify-center bg-[#FDFDFD]`}>
      <Text style={{ ...style.fontSemi, ...style.top }}>
        Selamat! Peminjama barangmu disetujui!
      </Text>

      <View style={tw`items-center`}>
        <Text style={{ ...style.fontMed, fontSize: 24, textAlign: "center",marginBottom: 51 }}>Peminjaman Disetujui!</Text>

        <Success />

        <Text style={{ ...style.font, fontSize: 14, color: COLORS.gray, textAlign: "center", width: 305, marginTop: 39 }}>
          Peminjamanmu disetujui, silahkan koordinasi kepada pemilik barang
          untuk pengambilan barang pinjamanmu
        </Text>
      </View>
      <ButtonFull
        title={"Selesai"}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

const style = StyleSheet.create({
  font: {
    fontFamily: FONT_FAMILY.Poppins,
  },
  fontSemi: {
    fontFamily: FONT_FAMILY.PoppinsSemiBold,
    fontSize: 12,
  },
  fontMed: {
    fontFamily: FONT_FAMILY.PoppinsMedium,
  },
  top: {
    fontSize: 12,
    backgroundColor: COLORS.green,
    top: 48,
    color: COLORS.white,
    position: "absolute",
    paddingHorizontal: 29,
    paddingVertical: 11,
    borderRadius: 50
  },
});
