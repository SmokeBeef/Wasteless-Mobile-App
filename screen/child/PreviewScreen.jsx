import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import React, { useEffect } from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import tw from "twrnc";
import { Button } from "react-native";
import ButtonFull from "../../components/child/ButtonFull";
import { COLORS, FONT_FAMILY } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { data as datas } from "../data/data";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function PreviewScreen({ route, navigation }) {
  let user;
  const data = route.params.data;
  console.log(data);
  useEffect(() => {
    async function getUser() {
      user = await JSON.parse(await AsyncStorage.getItem("data"));
    }
    getUser()
  }, []);
  const image = [data.img, data.img];
  return (
    <View style={tw`flex-1 items-center  `}>
      <Image style={style.img} source={data.img} />
      <BottomSheet
        snapPoints={["40%", "85%", "100%"]}
        style={tw`px-[26px] `}
        handleIndicatorStyle={{ backgroundColor: COLORS.gray2 }}
      >
        <BottomSheetView>
          <Text
            style={{
              ...style.font,
              fontSize: 12,
              color: COLORS.gray,
              marginTop: 24,
            }}
          >
            {data.penyewa} meminjamkan
          </Text>
          <Text style={{ ...style.fontMed, fontSize: 20 }}>{data.nama}</Text>

          <View style={tw`mt-[16px] flex-row gap-[24px]`}>
            <View style={tw`w-[92px]`}>
              <Text style={style.textGray}>Rating</Text>
              <Text style={style.textBold}>4/5</Text>
            </View>
            <View style={tw`w-[92px]`}>
              <Text style={style.textGray}>Waktu Ambil</Text>
              <Text style={style.textBold}>Pagi</Text>
            </View>
            <View style={tw`w-[92px]`}>
              <Text style={style.textGray}>Jarak</Text>
              <Text style={style.textBold}>1.5 Km</Text>
            </View>
          </View>

          <View style={tw`h-[1px] bg-black mt-[24px] mb-[24px] `}></View>

          <Text style={{ ...style.fontMed, fontSize: 12 }}>Pemilik</Text>
          <View style={tw`flex-row items-center gap-[16px] mt-[8px]`}>
            <Image
              style={tw`w-[40px] h-[40px] rounded-full`}
              source={require("../../assets/images/profile.jpeg")}
            />
            <Text style={{ ...style.fontMed, fontSize: 12 }}>
              {data.penyewa}
            </Text>
          </View>
          <Text style={{ ...style.fontMed, fontSize: 12, marginTop: 16 }}>
            Foto
          </Text>
          <View style={tw`flex-row  gap-[8px] mt-[8px]`}>
            {image.map((val, index) => (
              <Image
                key={index}
                style={tw`w-[100px] h-[100px] rounded-[8px]`}
                source={val}
              />
            ))}
          </View>

          <Text style={{ ...style.fontMed, marginTop: 16, fontSize: 12 }}>
            Deskripsi
          </Text>
          <ScrollView style={tw`h-[200px]`}>
            <Text
              style={{
                ...style.font,
                fontSize: 10,
                width: 323,
                color: COLORS.gray,
                marginTop: 8,
              }}
            >
              {data.desc}
            </Text>
          </ScrollView>
        </BottomSheetView>
      </BottomSheet>

      <ButtonFull
        title={"Pinjam"}
        onPress={() => {
          datas.forEach((val, index) => {
            if (val === data) {
              val.isPinjam = true;
            }
          });
          navigation.replace("success");
        }}
      />
    </View>
  );
}

const style = StyleSheet.create({
  font: {
    fontFamily: FONT_FAMILY.Poppins,
  },
  fontMed: {
    fontFamily: FONT_FAMILY.PoppinsMedium,
  },
  fontSemi: {
    fontFamily: FONT_FAMILY.PoppinsSemiBold,
  },
  img: {
    resizeMode: "cover",
    height: "65%",
    width: "100%",
    marginTop: 0,
  },
  textGray: {
    fontFamily: FONT_FAMILY.PoppinsMedium,
    color: COLORS.gray,
    fontSize: 10,
  },
  textBold: {
    fontFamily: FONT_FAMILY.PoppinsSemiBold,
    fontSize: 12,
  },
});
