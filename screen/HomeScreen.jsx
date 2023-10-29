import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React from "react";
import Chat from "../components/icon/Chat";

import tw from "twrnc";
import Notification from "../components/icon/Notification";
import { COLORS, FONT_FAMILY } from "../constants";
import Filter from "../components/icon/Filter";
import Search from "../components/icon/Search";
import { data } from "./data/data";
import TerdekatScreen from "./child/TerdekatScreen";
import TerbaruScreen from "./child/TerbaruScreen";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import TerpopulerScreen from "./child/TerpopulerScreen";

const HomeScreen = () => {
  return (
    <View style={tw`flex-1 bg-[#FDFDFD]`}>
      <ScrollView
       
        style={tw`mt-[49px] mx-[26px] `}
      >
        <View style={tw`flex-row justify-between mb-[24px]`}>
          <Chat />
          <Notification />
        </View>
        <Text style={style.title}>Mau pinjam barang apa?</Text>

        <View style={tw`flex-row gap-[16px] mb-[24px]`}>
          <View style={style.search}>
            <Search />
            <TextInput
              inlineImageLeft="Search"
              inputMode="search"
              placeholder="cari kebutuhanmu"
              style={{ ...style.fontMed, width: 200 }}
            />
          </View>
          <View
            style={tw`bg-[#757575] w-[50px] h-[50px] justify-center items-center rounded-[16px]`}
          >
            <Filter />
          </View>
        </View>
        <View  style={tw`flex-row gap-8 h-[130]`}>
          <TopNavigation />
        </View>
      </ScrollView>
    </View>
  );
};

const Stack = createMaterialTopTabNavigator();

function TopNavigation() {
  return (
    <Stack.Navigator
    
      style={{
        minHeight: 200,
      }}
      screenOptions={{
        
        lazyPlaceholder: () => <ActivityIndicator size={'large'} color={COLORS.black} />,
        
        tabBarIndicatorStyle: {
          backgroundColor: "black",
        },
        tabBarStyle: {
          width: 280,
          shadowOpacity: 0,
          shadowOffset: {
            height: 0,
            width: 0,
          },
          shadowColor: 0,
        },

        backgroundColor: "#FDFDFD",
        lazy: true,
      }}
    >
      <Stack.Screen
        name="terdekat"
        component={TerdekatScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ ...style.fontSemi, color: color }}>Terdekat</Text>
          ),
        }}
      />
      <Stack.Screen
        name="terbaru"
        component={TerbaruScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ ...style.fontSemi, color: color }}>Terbaru</Text>
          ),
        }}
      />
      <Stack.Screen
        name="terpopuler"
        component={TerpopulerScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ ...style.fontSemi, color: color }}>Terpopuler</Text>
          ),
        }}
      />
    </Stack.Navigator>
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
  title: {
    fontFamily: FONT_FAMILY.PoppinsMedium,
    fontSize: 24,
    width: 200,
    marginBottom: 16,
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
});

export default HomeScreen;
