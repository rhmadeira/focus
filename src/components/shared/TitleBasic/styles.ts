import { styled } from "@mui/material/styles";

export const TitleContent = styled("h1")(({ theme }) => ({
  fontFamily: "Roboto",
  lineHeight: "1.5rem",
  fontSize: "3rem",
  margin: "1rem 0",
  position: "relative",
  zIndex: 1,

  "&::after": {
    content: "''",
    position: "absolute",
    display: "block",
    width: "1.5rem",
    height: "1.5rem",
    backgroundColor: theme.palette.primary.light,
    bottom: "-10px",
    left: " -5px",
    borderRadius: "0.2rem",
    zIndex: -1,
  },
}));
