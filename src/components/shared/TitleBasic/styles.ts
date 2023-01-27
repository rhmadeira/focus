import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const ContainerTitle = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.contrastText,
  padding: "0.5rem 1rem",

  height: "5rem",
}));

export const TitleContent = styled("h1")(({ theme }) => ({
  fontFamily: "Roboto",
  color: theme.palette.secondary.dark,
  fontWeight: 600,
  lineHeight: "1.5rem",
  fontSize: "2rem",
  position: "relative",
  zIndex: 1,

  "&::after": {
    content: "''",
    position: "absolute",
    display: "block",
    width: "1rem",
    height: "1rem",
    backgroundColor: theme.palette.primary.light,
    bottom: "-5px",
    left: " -2px",
    borderRadius: "0.2rem",
    zIndex: -1,
  },
}));
