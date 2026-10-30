import { createContext, useContext } from 'react';

export const ThemeContext = createContext({
  theme: 'dark',
  toggleTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export default ThemeContext;