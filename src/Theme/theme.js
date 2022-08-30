 import {DefaultTheme, DarkTheme} from '@react-navigation/native';

export const LightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#F5F5F5",
    background: "#B71C1C",
    card: "#EEEEEE",
    text: "#212121"
  },
};

export const NightTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: "#FAFAFA",
    background: "#212121",
    card: "#424242",
    text: "#FFFFFF"
  },
};