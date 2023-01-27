import { ptBR } from "@mui/material/locale";
import { createTheme } from "@mui/material/styles";

export const themeMui = createTheme(
  {
    palette: {
      primary: {
        main: "#0f334c",
        contrastText: "#ffffff",
        light: "#49769a",
        dark: "#A9A9A9",
      },
      secondary: { main: "#f7efd8", contrastText: "#71cbc4", dark: "#1b1e23" },
      background: {
        default: "linear-gradient(135deg, #0f334c 0%, #547891 100%)",
      },
    },
    typography: {
      fontFamily: "Poppins, sans-serif",
    },
  },
  ptBR
);
