import { createTheme } from "@mui/material";
import { blue, cyan, grey, yellow } from "@mui/material/colors";
import { ptBR } from "@mui/x-date-pickers";

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
        default: grey[300],
        paper: grey[200],
      },
    },
  },
  ptBR
);
