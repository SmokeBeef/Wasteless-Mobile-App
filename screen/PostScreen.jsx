import {
  View,
  Text,
  StyleSheet,
  Image,
  Alert,
  Animated,
  TouchableOpacityBase,
  Button,
  ScrollView,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";

import tw from "twrnc";
import { COLORS, FONT_FAMILY } from "../constants";
import ButtonFull from "../components/child/ButtonFull";
import AddImage from "../components/icon/AddImage";

import * as ImagePicker from "expo-image-picker";

import { data } from "./data/data";
import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import DeleteImg from "../components/icon/DeleteImg";
import Radio from "../components/child/Radio";
import { Dropdown } from "react-native-element-dropdown";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import DropDownPicker from "react-native-dropdown-picker";

function PostScreen({ navigation, route }) {
  const [nama, setNama] = useState("");
  const [image, setImage] = useState([]);
  const [kualitas, setKualitas] = useState();
  const [location, setLocation] = useState();
  const [nameLocation, setNameLocation] = useState();
  const [waktuPengambilan, setWaktuPengambilan] = useState();
  const [maxDay, setMaxDay] = useState();
  const [desc,setDesc] = useState();

  const [isOpen, setIsOpen] = useState(false);
  const radioValue = [1, 2, 3, 4, 5];
  // const  {expand,} =useBottomSheet()
  const sheeRef = useRef(null);

  function get_random(list = []) {
    return list[Math.floor(Math.random() * list.length)];
  }

  const [waktuPengambilanValue, setWaktuPengambilanValue] = useState([
    { label: "Kapanpun", value: "kapanpun" },
    { label: "Pagi", value: "pagi" },
    { label: "Siang", value: "siang" },
    { label: "Sore", value: "sore" },
    { label: "Malam", value: "malam" },
  ]);

  const getPicture = async () => {
    try {
      await ImagePicker.requestCameraPermissionsAsync();
      let result = await ImagePicker.launchCameraAsync({
        cameraType: ImagePicker.CameraType.back,
        allowsEditing: true,
        quality: 1,
        aspect: [3, 4],
      });

      if (!result.canceled) {
        await saveImage(result.assets[0].uri);
      }
    } catch (error) {
      alert("error uploading : " + error.message);
    }
  };

  const saveImage = async (img) => {
    try {
      console.log(img);
      setImage([...image, img]);
    } catch (error) {
    } finally {
      sheeRef.current?.close();
      // console.log(sheeRef.current);
    }
  };

  const onSubmit = async () => {
    const result = {
      iLike: false,
      nama: nama,
      img: { uri: image[0] },
      jarak: get_random(["1 Km", "1.5 Km", "2 Km", "3 Km"]),
      isPinjam: false,
      like: 0,
      penyewa: await JSON.parse(await AsyncStorage.getItem("data")).nama,
      rating: `${kualitas}/5`,
      waktu: waktuPengambilan,
      location: location,
      maxs: maxDay,
      maps: location ? {
        latitude: location.latitude ,
        longitude: location.longitude,
      } : null,
      desc: desc
    };
    console.log(result);
    data.push(result);

    navigation.replace("main");
  };

  useEffect(() => {
    if (route.params?.latitude) {
      setLocation({
        latitude: route.params.latitude,
        longitude: route.params.longitude,
      });
      setNameLocation(route.params.nameLocation);
      console.log(route);
    }
  }, [route.params?.latitude, route.params?.longitude]);

  return (
    <>
      <View
        style={tw`pt-[8px] flex-1 bg-[${COLORS.white}]
        px-[26px] `}
      >
        <ScrollView nestedScrollEnabled>
          <View style={tw`flex-row gap-[8px]`}>
            {image.map((val, index) => (
              <View key={index}>
                <TouchableOpacity
                  onPress={() => {
                    setImage(image.filter((val, ind) => index !== ind));
                  }}
                  style={tw`absolute z-10  right-[9px] top-[9px] bg-white rounded-full`}
                >
                  <DeleteImg />
                </TouchableOpacity>
                <Image
                  style={tw`w-[100px] h-[100px] rounded-lg`}
                  source={{ uri: val }}
                />
              </View>
            ))}
            {image.length < 3 && (
              <TouchableOpacity onPress={() => getPicture()}>
                <AddImage />
              </TouchableOpacity>
            )}
          </View>

          <Text style={{ ...style.fontSemi, fontSize: 16, marginTop: 24 }}>
            Data Barang
          </Text>
          <View style={tw`mt-[16px]`}>
            <View style={tw`mb-[16px]`}>
              <Text style={{ ...style.fontMed, fontSize: 12 }}>
                Nama Barang
              </Text>
              <TextInput
                style={{
                  ...style.font,
                  ...style.inputText,
                }}
                onChangeText={(val) => setNama(val)}
                placeholder="Nama Barang"
              />
            </View>
            <View style={tw`mb-[16px]`}>
              <Text style={{ ...style.fontMed, fontSize: 12 }}>Deskripsi</Text>
              <TextInput
                multiline
                numberOfLines={10}
                textAlignVertical="top"
                style={{
                  ...style.font,
                  ...style.textArea,
                }}
                onChangeText={text => setDesc(text)}
                placeholder="Tambah Deskripsi"
              />
            </View>
          </View>
          <View style={tw`mb-[16px]`}>
            <Text style={{ ...style.fontMed, fontSize: 12 }}>Kualitas</Text>
            <View style={tw`flex-row gap-[16px] mt-[14px]`}>
              {radioValue.map((val, index) => {
                return (
                  <Radio
                    key={index}
                    text={val}
                    active={index === kualitas}
                    onPress={() => {
                      setKualitas((prev) => (prev === index ? null : index));
                    }}
                  />
                );
              })}
            </View>
          </View>
          <View style={tw`mb-[16px]`}>
            {/* <Select style={{ ...style.inputText }} >
              {waktuPengambilanValue.map((val) => (
                <Option  value={val}/>
              ))}
            </Select> */}
          </View>
          <View style={tw`mb-[16px]`}>
            <Text style={{ ...style.fontMed, fontSize: 12 }}>
              Waktu Pengambilan
            </Text>
            <Dropdown
              data={waktuPengambilanValue}
              valueField="value"
              labelField="label"
              value={waktuPengambilan}
              onChange={setWaktuPengambilan}
              fontFamily="Poppins"
              style={{ ...style.inputText }}
            />
          </View>
          <View style={tw`mb-[16px]`}>
            <Text style={{ ...style.fontMed, fontSize: 12 }}>Lokasimu</Text>
            <TouchableOpacity onPress={() => navigation.navigate("map")}>
              <TextInput
                style={{
                  ...style.font,
                  ...style.textArea,
                }}
                multiline
                numberOfLines={10}
                textAlignVertical="top"
                value={nameLocation}
                placeholder="Klik"
                editable={false}
              />
            </TouchableOpacity>
          </View>
          <View style={tw`mb-[16px]`}>
            <Text style={{ ...style.fontMed, fontSize: 12 }}>
              Peminjaman Maks
            </Text>
            <TextInput
              keyboardType="numeric"
              style={{
                ...style.font,
                ...style.inputText,
              }}
              placeholder="... hari"
            />
          </View>
          <View style={tw`h-20`}></View>
        </ScrollView>
        <ButtonFull title={"Submit"} onPress={onSubmit} />
      </View>
    </>
  );
}

const style = StyleSheet.create({
  font: {
    fontFamily: FONT_FAMILY.Poppins,
  },
  fontSemi: {
    fontFamily: FONT_FAMILY.PoppinsMedium,
    fontSize: 12,
  },
  fontMed: {
    fontFamily: FONT_FAMILY.PoppinsMedium,
  },
  inputText: {
    borderWidth: 1.5,
    borderColor: COLORS.gray,
    borderRadius: 12,
    height: 51,
    marginTop: 10,
    paddingHorizontal: 25,
    fontSize: 14,
    alignItems: "center",
  },
  textArea: {
    borderWidth: 1.5,
    borderColor: COLORS.gray,
    borderRadius: 12,
    height: 114,
    marginTop: 10,
    paddingHorizontal: 25,
    fontSize: 14,
    justifyContent: "flex-start",
    paddingVertical: 12,
  },
});
export default PostScreen;
