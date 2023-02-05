import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
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
    bottom: "10px",
    left: " 15px",
    borderRadius: "0.2rem",
    zIndex: -1,
  },
}));
