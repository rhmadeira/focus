import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ContainerForm = styled(Box)(({ theme }) => ({
  display: "flex",
  flex: 1,
  // backgroundColor: theme.palette.secondary.main,
}));

export const ContentLogo = styled(Box)(({ theme }) => ({
  height: "100vh",
  flex: 1,
  background: theme.palette.background.default,
}));

export const ConteinerForm = styled(Box)(({ theme }) => ({
  height: "100vh",
  width: "700px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

export const ContentForm = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  minWidth: "400px",
}));

export const Footer = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(8),
  fontSize: "1.2rem",
  display: "flex",
  textAlign: "center",
  maxWidth: "500px",
}));
