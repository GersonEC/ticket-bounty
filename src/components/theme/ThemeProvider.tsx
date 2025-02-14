import { ThemeProvider as BaseThemeProvider } from 'next-themes';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <BaseThemeProvider attribute='class' defaultTheme='system' enableSystem>
      {children}
    </BaseThemeProvider>
  );
};
