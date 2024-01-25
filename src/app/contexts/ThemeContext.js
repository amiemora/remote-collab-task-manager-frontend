import React, { createContext, useContext, useState } from "react";

/**
 * This example simulates a theme switching functionality using useContext.
 * Components that need to access or update the theme can use the useTheme hook.
 */

// Create a context for the theme
const ThemeContext = createContext();

// Custom hook to access the theme context
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

// ThemeProvider component to wrap the app and provide the theme context
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const themeContextValue = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, useTheme };
