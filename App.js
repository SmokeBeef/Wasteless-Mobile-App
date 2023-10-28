import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigation from "./navigation/BottomTabNavigation";
import tw from "twrnc";
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./screen/SplashScreen";
import RegisterScreen from "./screen/RegisterScreen";
import * as Splash from "expo-splash-screen"
import { useFonts } from "expo-font";
import PreviewScreen from "./screen/child/PreviewScreen";
import ArrowBack from "./components/icon/ArrowBack";

const Stack = createStackNavigator()

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

export default function App() {

  const [isLoaded] = useFonts({
    "Poppins": require("./assets/fonts/Poppins-Regular.ttf"),
    "PoppinsSemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "PoppinsMedium": require("./assets/fonts/Poppins-Medium.ttf"),

  })

  if (!isLoaded) return undefined

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
          // transitionSpec: {
          //   open: config,
          //   close: config
          // },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,

      }} >
        <Stack.Screen name="splash" component={SplashScreen} />
        <Stack.Screen name="register" component={RegisterScreen} />
        <Stack.Screen name="main" component={BottomTabNavigation} />
        <Stack.Screen name="detail" options={{ 
          headerShown: true,
          header: ({navigation}) => {
            return (
              <View style={tw`bg-white pt-[49px] pb-4 px-[26px]`}>
                <ArrowBack onPress={() => navigation.goBack()} />
                <Text>{}</Text>
              </View>
            )
          }
         }} component={PreviewScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
