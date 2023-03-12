import { Box, ThemeProvider } from "@mui/material";
import { useThemeApp } from "../../services/hooks/useThemeApp";
import { DarkTheme } from "../Dark";
import { LightTheme } from "../Light";

interface IThemeAppProps {
  children: React.ReactNode;
}

export const ThemeApp = ({ children }: IThemeAppProps) => {
  const isDarkTheme = useThemeApp((state) => state.isDarkTheme);
  const theme = isDarkTheme ? DarkTheme : LightTheme;

  return (
    <ThemeProvider theme={theme}>
      <Box
        width="100vw"
        height="100vh"
        bgcolor={theme.palette.background.default}
      >
        {children}
      </Box>
    </ThemeProvider>
  );
};
