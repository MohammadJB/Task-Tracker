"use client";

import { useEffect, useState, createContext } from "react";

export enum Themes {
  Light = "light",
  Dark = "dark",
}

export type ThemeContextType = {
  theme: Themes;
  switchTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: Themes.Light,
  switchTheme: () => {},
});

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Themes>(Themes.Light);

  useEffect(() => {
    const root = document.getElementsByTagName("html")[0];
    if (theme === Themes.Light) {
      root.className = "";
    } else {
      root.className = "dark";
    }
  }, [theme]);

  const switchTheme = () =>
    setTheme((theme) => (theme === Themes.Light ? Themes.Dark : Themes.Light));

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
