import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";

import tw from "twrnc";
import Chat from "../components/icon/Chat";
import Notification from "../components/icon/Notification";
import { Image } from "react-native";
import { COLORS, FONT_FAMILY } from "../constants";
import Search from "../components/icon/Search";
import Filter from "../components/icon/Filter";
import TerbaruScreen from "./child/TerbaruScreen";

const ProfileScreen = () => {
  return (
    <View style={tw`bg-[#FDFDFD] flex-1 `}>
      <View style={tw`mt-[49px] mx-[26px]`}>
        <View style={tw`flex-row justify-between mb-[24px]`}>
          <Chat />
          <Notification />
        </View>
        <View style={tw`flex-row items-center gap-4`}>
          <Image
            style={tw`rounded-full w-[40px] h-[40px]`}
            source={require("../assets/images/profile.jpeg")}
          />
          <Text style={{ ...style.fontMed, ...style.name }}>Diana Agnesia</Text>
        </View>


        <View style={tw`mt-[10px] flex-row gap-[24px]`}>
          <View style={tw`w-[92px]`}>
            <Text style={style.textGray}>Rating barang rata-rata</Text>
            <Text style={style.textBold}>4/5</Text>
          </View>
          <View>
            <View style={tw``}>
              <Text style={style.textGray}>Barang yang dimiliki</Text>
              <Text style={style.textBold}>1</Text>
            </View>
          </View>
          <View>
            <View style={tw`w-[92px]`}>
              <Text style={style.textGray}>Kota</Text>
              <Text style={style.textBold}>Malang</Text>
            </View>
          </View>
        </View>


        <View style={tw`mt-[16px] flex-row gap-[24px]`}>
          <View style={tw`w-[92px]`}>
            <Text style={style.textGray}>Rating</Text>
            <Text style={style.textBold}>9/11/2001</Text>
          </View>
          <View>
            <View style={tw``}>
              <Text style={style.textGray}>Kontribusi berbagi</Text>
              <Text style={style.textBold}>1</Text>
            </View>
          </View>
        </View>

        <View style={tw`flex-row gap-[16px] mt-[16px]`}>
          <View style={style.search}>
            <Search />
            <TextInput
              inlineImageLeft="Search"
              inputMode="search"
              placeholder="cari barang dari Diana Agnesia"
              style={{ ...style.fontMed, width: 200, fontSize: 12 }}
            />
          </View>
          <View
            style={tw`bg-[#757575] w-[50px] h-[50px] justify-center items-center rounded-[16px]`}
          >
            <Filter />
          </View>
        </View>

        <Text style={{ ...style.fontMed, ...style.terbaru }}>Terbaru</Text>
        <View style={tw` h-[100]`}>

        <TerbaruScreen />
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  font: {
    fontFamily: FONT_FAMILY.Poppins,
  },
  fontMed: {
    fontFamily: FONT_FAMILY.PoppinsMedium,
  },
  name: {
    fontSize: 12,
  },
  textGray: {
    fontFamily: FONT_FAMILY.Poppins,
    fontSize: 10,
    color: COLORS.gray,
  },
  textBold: {
    fontSize: 12,
    fontFamily: FONT_FAMILY.PoppinsSemiBold,
  },
  search: {
    fontFamily: FONT_FAMILY.PoppinsMedium,
    backgroundColor: "#EEEEEE",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 16,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  terbaru: {
    marginTop: 10,
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderBottomColor: COLORS.black,
    borderBottomWidth: 2,
    width: 64,
    fontSize: 12,
    textAlign: "center"
  }
});

export default ProfileScreen;
