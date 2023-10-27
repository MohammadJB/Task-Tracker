"use client";

import { useTheme } from "@/customHooks/useTheme";
import { Themes } from "@/providers/themeProvider";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

const ThemeSwitcher = () => {
  const { theme, switchTheme } = useTheme();
  return (
    <div
      className="font-semibold flex items-center gap-2 cursor-pointer select-none"
      onClick={() => switchTheme()}
    >
      {theme === Themes.Dark ? <FaSun /> : <FaMoon />}
      <span>{theme === Themes.Dark ? "Light" : "Dark"} Mode</span>
    </div>
  );
};

export default ThemeSwitcher;
