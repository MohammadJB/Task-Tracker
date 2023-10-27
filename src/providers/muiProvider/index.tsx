"use client";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Themes } from "../themeProvider";
import { useTheme } from "@/customHooks/useTheme";
import { colors } from "@/theme/colors";

export const lightTheme = createTheme({});
export const darkTheme = createTheme({});
const MUIProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();

  const customTheme = createTheme({
    components: {
      MuiButton: {
        variants: [
          {
            props: { variant: "contained" },
            style: {
              backgroundColor: colors["secondary-500"] + " !important",
              color: colors["white"],
              ":disabled": {
                backgroundColor:
                  colors[theme === Themes.Dark ? "main-600" : "main-400"] +
                  " !important",
              },
              "&:hover": {
                backgroundColor: colors["secondary-400"] + " !important",
              },
            },
          },
          {
            props: { variant: "outlined" },
            style: {
              color: colors[theme === Themes.Dark ? "main-900" : "main-100"],
              borderColor:
                colors[theme === Themes.Dark ? "main-900" : "main-100"],
              ":disabled": {
                color: colors["gray-400"],
                borderColor: colors["gray-400"],
              },
              "&:hover": {
                color: colors["secondary-500"],
                borderColor: colors["secondary-500"],
              },
            },
          },
        ],
      },
    },
  });

  return <ThemeProvider theme={customTheme}>{children}</ThemeProvider>;
};

export default MUIProvider;
