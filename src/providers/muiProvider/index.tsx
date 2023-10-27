"use client";

import { Montserrat } from "next/font/google";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Themes } from "../themeProvider";
import { useTheme } from "@/customHooks/useTheme";
import { colors } from "@/theme/colors";

const montserrat = Montserrat({ subsets: ["latin"] });

export const lightTheme = createTheme({
  typography: {
    fontFamily: montserrat.style.fontFamily,
  },
  palette: {
    text: {
      primary: colors["main-900"],
      secondary: colors["main-800"],
    },
    primary: {
      "400": colors["main-800"],
      main: colors["main-900"],
      "600": colors["main-950"],
    },
    secondary: {
      "400": colors["secondary-400"],
      main: colors["secondary-500"],
      "600": colors["secondary-600"],
    },
    grey: {
      "200": colors["gray-200"],
      "300": colors["gray-300"],
      "400": colors["gray-400"],
      "500": colors["gray-500"],
      "600": colors["gray-600"],
    },
    success: {
      "100": colors["green-100"],
      "500": colors["green-500"],
      "600": colors["green-600"],
    },
    error: {
      "100": colors["red-100"],
      "500": colors["red-500"],
      "600": colors["red-600"],
    },
    common: {
      black: colors["black"],
      white: colors["white"],
    },
  },
});

export const darkTheme = createTheme({
  typography: {
    fontFamily: montserrat.style.fontFamily,
  },
  palette: {
    text: {
      primary: colors["main-100"],
      secondary: colors["main-200"],
    },
    primary: {
      "400": colors["main-100"],
      main: colors["main-200"],
      "600": colors["main-300"],
    },
    secondary: {
      "400": colors["secondary-400"],
      main: colors["secondary-500"],
      "600": colors["secondary-600"],
    },
    grey: {
      "200": colors["gray-200"],
      "300": colors["gray-300"],
      "400": colors["gray-400"],
      "500": colors["gray-500"],
      "600": colors["gray-600"],
    },
    success: {
      "100": colors["green-100"],
      "500": colors["green-500"],
      "600": colors["green-600"],
    },
    error: {
      "100": colors["red-100"],
      "500": colors["red-500"],
      "600": colors["red-600"],
    },
    common: {
      black: colors["black"],
      white: colors["white"],
    },
  },
});

const MUIProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme === Themes.Dark ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
};

export default MUIProvider;
