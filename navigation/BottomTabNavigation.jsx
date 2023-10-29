import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screen/HomeScreen";
import MapScreen from "../screen/MapScreen";
import PointScreen from "../screen/PointScreen";
import ProfileScreen from "../screen/ProfileScreen";
import PostScreen from "../screen/PostScreen";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StatusBar,
  TouchableOpacityBase,
} from "react-native";

import tw from "twrnc";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PreviewScreen from "../screen/child/PreviewScreen";
import { COLORS, FONT_FAMILY } from "../constants";
import ArrowBack from "../components/icon/ArrowBack";
import { SafeAreaFrameContext } from "react-native-safe-area-context";
import Notification from "../components/icon/Notification";

const Tab = createBottomTabNavigator();

const textStyle = (focused) =>
  focused
    ? { color: "#09AA51", fontFamily: "Poppins" }
    : { color: "#C1C0C8", fontFamily: "Poppins" };
const CustomeTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: "center",
      alignItems: "center",
    }}
    onPress={onPress}
  >
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: "#09AA51",
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          elevation: 0,
          backgroundColor: "#ffff",
          borderRadius: 15,
          height: 90,
          paddingHorizontal: 15,
        },
        lazy: true,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={tw`justify-center items-center `}>
              <Image
                source={require("../assets/icon/Home.png")}
                resizeMode="contain"
                style={{
                  width: 35,
                  height: 35,
                  tintColor: focused ? "#09AA51" : "#C1C0C8",
                }}
              ></Image>
              <Text style={textStyle(focused)}>Home</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={tw`justify-center items-center`}>
              <Image
                source={require("../assets/icon/Map.png")}
                resizeMode="contain"
                style={{
                  width: 35,
                  height: 35,
                  tintColor: focused ? "#09AA51" : "#C1C0C8",
                }}
              ></Image>
              <Text style={textStyle(focused)}>Map</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={PostScreen}
        options={{
          tabBarStyle: { display: "none" },

          headerShown: true,
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/icon/Plus.png")}
              resizeMode="contain"
              style={{
                width: 35,
                height: 35,
              }}
            />
          ),
          tabBarButton: (props) => <CustomeTabBarButton {...props} />,
          header: ({ navigation, route }) => {
            return (
              <View
                style={tw`bg-white pt-[49px] pb-4 px-[26px] justify-between flex-row items-center gap-[12px]`}
              >
                <View style={tw`flex-row items-center gap-[12px]`}>
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    <ArrowBack />
                  </TouchableOpacity>
                  <Text style={{ fontFamily: "PoppinsSemiBold", fontSize: 16 }}>
                    Pinjamkan Barang
                  </Text>
                </View>
                <Notification />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Point"
        component={PointScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={tw`justify-center items-center`}>
              <Image
                source={require("../assets/icon/Gamification.png")}
                resizeMode="contain"
                style={{
                  width: 35,
                  height: 35,
                  tintColor: focused ? "#09AA51" : "#C1C0C8",
                }}
              ></Image>
              <Text style={textStyle(focused)}>Point</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={tw`justify-center items-center`}>
              <Image
                source={require("../assets/icon/Profile.png")}
                resizeMode="contain"
                style={{
                  width: 35,
                  height: 35,
                  tintColor: focused ? "#09AA51" : "#C1C0C8",
                }}
              />
              <Text style={textStyle(focused)}>Profile</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// const Stack = createNativeStackNavigator();

// function Home() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="home"
//         options={{ headerShown: false, animation: "slide_from_right" }}
//         component={HomeScreen}
//       />
//       {/* <Stack.Screen
//         name="detail"
//         options={{
//           header: ({ options, route, back, navigation }) => (
//             <View
//               style={tw`pt-[49px] pb-4 flex-row justify-between  px-[26px] bg-[${COLORS.white}]`}
//             >
//               <View style={tw`items-center`}>
//                 <ArrowBack onPress={() => navigation.goBack()} />
//                 <Text>{route.params}</Text>
//               </View>
//               <Notification />
//             </View>
//           ),
//         }}
//         component={PreviewScreen}
//       /> */}
//     </Stack.Navigator>
//   );
// }

export default BottomTabNavigation;
