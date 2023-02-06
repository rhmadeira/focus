import { createTheme } from "@mui/material";
import { cyan, grey, yellow } from "@mui/material/colors";
import { ptBR } from "@mui/material/locale";

export const DarkTheme = createTheme(
  {
    palette: {
      mode: "dark",
      primary: {
        main: "#49769a",
        dark: "#03263a",
        light: "#49769a",
        contrastText: "#ffffff",
      },
      secondary: {
        main: "#49769a",
        dark: "#49769a",
        light: cyan[500],
        contrastText: "#ffffff",
      },
      background: {
        default: grey[800],
        paper: grey[900],
      },
    },
    typography: {
      allVariants: {
        color: "#ffffff",
      },
    },
  },
  ptBR
);
