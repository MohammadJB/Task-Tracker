import { ThemeContext } from "@/providers/themeProvider";
import { useContext } from "react";

export function useTheme() {
  const { theme, switchTheme } = useContext(ThemeContext);

  return { theme, switchTheme };
}
