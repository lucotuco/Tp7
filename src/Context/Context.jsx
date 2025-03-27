import { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDefaultTheme, setDefault] = useState(false);

  const cambiarFondo = () => {
    setDefault((prevTheme) => !prevTheme);
  };

  return (
    <ThemeContext.Provider value={{ isDefaultTheme, cambiarFondo }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
