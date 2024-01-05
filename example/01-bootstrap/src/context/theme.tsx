import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext({
  theme: {
    primary: '#000',
    secondary: '#fff',
  },
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme: defaultTheme } = useContext(ThemeContext);
  const [theme, setTheme] = useState(defaultTheme);

  const toggleTheme = () => {
    setTheme({
      primary: theme.secondary,
      secondary: theme.primary,
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
