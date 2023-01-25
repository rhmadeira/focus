import { ptBR } from "@mui/material/locale";
import { createTheme } from "@mui/material/styles";

export const themeMui = createTheme(
  {
    palette: {
      primary: { main: "#0f334c", contrastText: "#fff", light: "#547891" },
      secondary: { main: "#f5f5f5" },
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
