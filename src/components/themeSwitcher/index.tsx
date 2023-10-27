"use client";

import { useTheme } from "@/customHooks/useTheme";
import { Themes } from "@/providers/themeProvider";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

const ThemeSwitcher = () => {
  const { theme, switchTheme } = useTheme();

  return (
    <button
      className="rounded hover:bg-main-300 hover:dark:bg-main-700 p-2"
      onClick={() => {
        switchTheme();
      }}
    >
      {theme === Themes.Dark ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default ThemeSwitcher;
