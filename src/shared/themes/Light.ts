import { createTheme } from "@mui/material";
import { blue, cyan, yellow } from "@mui/material/colors";
import { ptBR } from "@mui/material/locale";

export const LightTheme = createTheme(
  {
    palette: {
      mode: "light",
      primary: {
        main: "#0f334c",
        dark: "#03263a",
        light: "#49769a",
        contrastText: "#ffffff",
      },
      secondary: {
        main: "#f7efd8",
        dark: cyan[800],
        light: cyan[500],
        contrastText: "#ffffff",
      },
      background: {
        default: "#dadada",
        paper: "#ffffff",
      },
    },
  },
  ptBR
);
