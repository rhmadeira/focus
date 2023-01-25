import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ButtonBasic = styled(Button)(({ theme }) => ({
  fontSize: "1rem",
  fontFamily: "Roboto",
  cursor: "pointer",
  border: "none",
  borderRadius: "0.5rem",
  padding: "0.5rem 1rem",
  color: theme.palette.secondary.main,
  backgroundColor: theme.palette.primary.main,
  minWidth: "10rem",
  boxSizing: "border-box",

  "&:hover": {
    backgroundColor: theme.palette.primary.main, //tem q mudar
  },
}));
