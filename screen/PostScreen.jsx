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
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import tw from "twrnc";
import { COLORS, FONT_FAMILY } from "../constants";
import ButtonFull from "../components/child/ButtonFull";
import AddImage from "../components/icon/AddImage";
import BottomSheet, {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
  useBottomSheet,
} from "@gorhom/bottom-sheet";
import {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";

import { BlurView } from "expo-blur";
import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import DeleteImg from "../components/icon/DeleteImg";

function PostScreen({ navigation }) {
  const [image, setImage] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hasCameraPermision, setHasCameraPermision] = useState();
  const [hasGaleryPermision, setHasGaleryPermision] = useState();
  // const  {expand,} =useBottomSheet()
  const sheeRef = useRef(null);

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
      setIsOpen(false);
    } catch (error) {
    } finally {
      sheeRef.current?.close();
      // console.log(sheeRef.current);
    }
  };

  return (
    <>
      <View
        style={tw`pt-[8px] flex-1 ${
          isOpen ? `bg-gray-100` : `bg-[${COLORS.white}]`
        } px-[26px] `}
      >
        <ScrollView>
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
                placeholder="Tambah Deskripsi"
              />
            </View>
            <View style={tw`mb-[16px]`}>
              <Text style={{ ...style.fontMed, fontSize: 12 }}>
                Nama Barang
              </Text>
              <TextInput
                style={{
                  ...style.font,
                  ...style.inputText,
                }}
                placeholder="Nama Barang"
              />
            </View>
          </View>
        </ScrollView>
        <ButtonFull title={"Submit"} onPress={() => 0} />
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
    paddingVertical: 12
  },
});
export default PostScreen;
