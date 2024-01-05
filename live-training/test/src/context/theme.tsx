import { FC, createContext, useEffect, useState } from 'react';

const defaultTheme = {
  primary: '#000',
  secondary: '#fff',
};

type NullUndefinedStringOrNumber = string | number | null | undefined;

interface ContextType {
  theme: Record<string, NullUndefinedStringOrNumber>;
  toggleTheme: () => void;
}

// Most important
export const ThemeContext = createContext<ContextType>({
  theme: defaultTheme,
  toggleTheme: () => {},
});

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch configurations from API
    setLoading(true);
    setTimeout(() => {
      setTheme(defaultTheme);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <h1>Loadin theme...</h1>;
  }

  const handleToggleTheme = () => {
    setTheme({
      primary: theme.secondary,
      secondary: theme.primary,
    });
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        toggleTheme: handleToggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
