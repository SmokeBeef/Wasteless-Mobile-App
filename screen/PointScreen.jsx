import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect } from "react";

import tw from "twrnc";
import { dataUser } from "./data/data";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLORS, FONT_FAMILY } from "../constants";
import LeaderboardIcon from "../components/icon/LeaderboardIcon";

function ordinal_suffix_of(i) {
  var j = i % 10,
    k = i % 100;
  if (j == 1 && k != 11) {
    return i + "ST";
  }
  if (j == 2 && k != 12) {
    return i + "ND";
  }
  if (j == 3 && k != 13) {
    return i + "RD";
  }
  return i + "TH";
}

const PointScreen = () => {
  const [data, setData] = useState();
  const [indexUser, setIndexUser] = useState(null);

  dataUser.sort((a, b) => b.point - a.point);

  const getDataUser = async () => {
    const result = await AsyncStorage.getItem("data");
    setData(JSON.parse(result));
    console.log(JSON.parse(result));
  };

  useEffect(() => {
    getDataUser();
  }, []);
  useEffect(() => {
    if (data) {
      const hasil = dataUser.findIndex((val) => val.id === data.id);
      console.log("data user sekarang : ");
      console.log(hasil);
      setIndexUser(hasil);
      console.log("hasil data : ", data);
    }
    console.log(data);
  }, [data]);

  return (
    <View style={tw`bg-white`}>
      <View style={tw`bg-[${COLORS.green}] min-h-[200px] `}>
        <View
          style={tw`flex-1 justify-center items-center flex-row gap-[21px] `}
        >
          {indexUser === null ? (
            <ActivityIndicator color={COLORS.white} size={"large"} />
          ) : (
            <>
              <Text
                style={{
                  ...style.fontSemi,
                  fontSize: 24,
                  flex: 1,
                  textAlign: "right",
                  color: "white",
                }}
              >
                {ordinal_suffix_of(indexUser + 1)}
              </Text>
              <Image source={dataUser[indexUser].photo} style={style.img} />
              <Text
                style={{
                  ...style.fontSemi,
                  fontSize: 24,
                  flex: 1,
                  textAlign: "left",
                  color: "white",
                }}
              >
                {data.point}pts
              </Text>
            </>
          )}
        </View>
        <View
          style={tw`flex-row justify-center h-[27px] bg-white mb-[29px] w-[228px] mx-auto rounded-lg`}
        >
          <View  style={tw`items-center justify-center flex-1 rounded-l-lg`}>
            <Text style={{ ...style.font,fontSize: 15 }}>Global</Text>
          </View>
          <View style={tw`items-center justify-center flex-1 bg-[#EEE] rounded-r-lg`}>
            <Text style={{ ...style.font,fontSize: 15}}>Friends</Text>
          </View>
        </View>
      </View>

      <ScrollView style={tw`pt-10`}>
        {dataUser.map((val, index) => (
          <View
          key={index}
            style={tw`flex-row px-[12px] pt-[12px] pb-[8px] rounded-xl justify-between w-[323px] mx-auto items-center bg-[#F3F3F3] mb-[16px]`}
          >
            <View style={tw`flex-row items-center`}>
              <Text style={{ ...style.font, fontSize: 24 }}>{index + 1}</Text>
              <Image source={val.photo} style={{ ...style.imgList, marginLeft: 10 }} />
              <View style={tw`ml-[5px] flex-col -gap-1`}>
                <Text style={{ ...style.fontSemi, fontSize: 14 }}>
                  {val.nama}
                </Text>
                <Text
                  style={{ ...style.font, color: COLORS.gray, fontSize: 12 }}
                >
                  {val.point} Points
                </Text>
              </View>
            </View>

            <LeaderboardIcon />
          </View>
        ))}
        <Text style={tw`mt-80`}>
          halo
        </Text>
      </ScrollView>
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
  fontMed: {
    fontFamily: FONT_FAMILY.PoppinsMedium,
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 100,
  },
  imgList: {
    width: 44,
    height: 44,
    borderRadius: 100,
  },
});
export default PointScreen;
