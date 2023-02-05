import { createTheme } from "@mui/material";
import { cyan, yellow } from "@mui/material/colors";
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
        default: "#303134",
        paper: "#202124",
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
