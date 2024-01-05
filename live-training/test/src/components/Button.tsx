import { useContext } from 'react';
import { ThemeContext } from '../context/theme';

export const ThemedButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      style={{
        backgroundColor: theme.primary as string,
        color: theme.secondary as string,
      }}
      onClick={toggleTheme}
    >
      Change Theme
    </button>
  );
};
