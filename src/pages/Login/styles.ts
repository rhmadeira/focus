import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";

export const ContainerAll = styled.div`
  display: flex;
  flex: 1;
  background-color: var(--gray50);
`;

export const ContentImg = styled.div`
  height: 100;
  flex: 1;
  background: linear-gradient(135deg, #0f334c 0%, #547891 100%);
`;

export const TitleLogin = styled.h1`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 600;
  line-height: 1.5rem;
  font-size: 2rem;
  position: relative;
  z-index: 1;
  margin-bottom: 1rem;

  &::after {
    content: "";
    position: absolute;
    display: block;
    width: 1rem;
    height: 1rem;
    background-color: #49769a;
    bottom: -5px;
    left: -2px;
    border-radius: 0.2rem;
    z-index: -1;
  }
`;

export const ContainerForm = styled.div`
  height: 100vh;
  width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    min-width: 400px;
    gap: 16px;
  }
`;

export const Footer = styled.footer`
  display: flex;
  font-size: 1.2rem;
  text-align: center;
  max-width: 500px;
  margin-top: 3rem;
`;
