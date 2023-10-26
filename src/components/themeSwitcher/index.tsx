"use client";

import { useTheme } from "@/customHooks/useTheme";
import { Themes } from "@/providers/themeProvider";

const ThemeSwitcher = () => {
  const { theme, switchTheme } = useTheme();
  return (
    <div
      className="font-semibold flex items-center gap-2 cursor-pointer select-none"
      onClick={() => switchTheme()}
    >
      <span>{theme === Themes.Dark ? "Light" : "Dark"} Mode</span>
    </div>
  );
};

export default ThemeSwitcher;
