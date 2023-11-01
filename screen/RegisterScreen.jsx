import {
  View,
  Text,
  Pressable,
  Button,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import storage from "@react-native-async-storage/async-storage"
import tw from "twrnc";
import { Logo } from "../components";
import { COLORS } from "../constants/theme";
import ArrowBack from "../components/icon/ArrowBack";
import ButtonFull from "../components/child/ButtonFull";

export default function RegisterScreen({ navigation }) {
  const [data, setData] = useState({
    nama: null,
    email: null,
    password: null,
  });
  return (
    <View style={tw`flex-1`}>
      <ScrollView style={tw`flex-1`}>
        <View
          style={tw`mt-[43px] text-lg ml-[25px] flex-row items-center gap-4`}
        >
          <ArrowBack />
          <Text style={style.fontSemiBold}>Daftar Akun</Text>
        </View>
        <View style={tw`justify-center items-center my-[49px]`}>
          <Logo height={114} />
        </View>

        <View style={tw`mb-6`}>
          <Text style={{ ...style.font, ...style.label }}>Nama Lengkap</Text>
          <TextInput
            onChangeText={(e) => setData({ ...data, nama: e })}
            placeholder="Nama Lengkap"
            style={{ ...style.input, ...style.font }}
          />
        </View>
        <View style={tw`mb-6`}>
          <Text style={{ ...style.font, ...style.label }}>Email</Text>
          <TextInput
            keyboardType="email-address"
            placeholder="email"
            style={{ ...style.input, ...style.font }}
            onChangeText={(e) => setData({ ...data, email: e })}
          />
        </View>
        <View>
          <Text style={{ ...style.font, ...style.label }}>Password</Text>
          <TextInput
            secureTextEntry
            placeholder="*******"
            style={{ ...style.input, ...style.font }}
            onChangeText={(e) => setData({ ...data, password: e })}
          />
        </View>

        <View style={tw`mt-20`}>
          <Text></Text>
        </View>
      </ScrollView>
      <ButtonFull
        title={"Daftar"}
        onPress={async() => {
          const condition = !data.email || !data.nama || !data.password;
          console.log(data);
          if (condition) {
            Alert.alert("wajib di isi semua");
          } else {
            await storage.setItem("data", JSON.stringify(data))
            navigation.replace("main");
          }
        }}
      />
    </View>
  );
}

const style = StyleSheet.create({
  font: {
    fontFamily: "Poppins",
  },
  fontSemiBold: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 15,
    paddingTop: 3,
  },
  label: {
    marginHorizontal: 26,
    fontSize: 14,
  },
  input: {
    borderColor: COLORS.slate,
    borderWidth: 1,
    paddingHorizontal: 18,
    paddingVertical: 12,
    fontSize: 14,
    marginHorizontal: 26,
    borderRadius: 12,
  },
  button: {
    backgroundColor: COLORS.green,
    paddingVertical: 10,
    alignItems: "center",
    marginHorizontal: 26,
    borderRadius: 50,
    width: "90%",
    marginBottom: 0,
  },
});
