import React, { createContext, useState, useContext, useMemo } from "react";

type TThemeContext = {
  darkMode: boolean;
  toggleTheme: () => void;
};

interface IThemeProviderProps {
  children: React.ReactNode;
}

const ThemeContext = createContext<TThemeContext>({
  darkMode: false,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: IThemeProviderProps) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
    console.log("Theme toggled");
    console.log(darkMode);
  };

  const contextValue = useMemo(
    () => ({
      darkMode,
      toggleTheme,
    }),
    [darkMode]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): TThemeContext => {
  return useContext(ThemeContext);
};
