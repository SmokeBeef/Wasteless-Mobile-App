
import { Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window');

const COLORS = {
  primary: "#09AA51",
  secondary: "#DDF0FF",
  tertiary: "#FF7754",

  gray: "#83829A",
  gray2: "#C1C0C8",

  offwhite: "#F3F4F8",
  white: "#FFFFFF",
  black: "#000000",
  red: "#e81e4d",
  green: "#09AA51",
  lightWhite: "#FAFAFC",
  slate: "#1E1E1E"
};


const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 44,
  height,
  width
};


const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

const FONT_FAMILY = {
  Poppins: "Poppins",
  PoppinsSemiBold: "PoppinsSemiBold",
  PoppinsMedium: "PoppinsMedium",
}


export { COLORS, SIZES , SHADOWS,FONT_FAMILY };
