import { css, Global } from "@emotion/react";
import styled from "@emotion/styled";
import BgFormas from "../../assets/bg-formas.svg";

export const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        box-sizing: border-box;
        /* background: var(--gray100); */

        padding: 0;
        margin: 0;

        overflow-x: hidden;

        font-family: "Roboto", sans-serif;
        color: #222222;

        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
      }
      a {
        text-decoration: none;
        color: inherit;
      }
      body::-webkit-scrollbar {
        width: 4px;
      }
      /* body::-webkit-scrollbar-track {
        background: #03263a;
      } */
      /* body::-webkit-scrollbar-thumb {
        background-color: var(--blue400);
        border-radius: 20px;
      } */

      :root {
        --white: #f8f9fc;
        --White100: #f7efd8;
        --black: #222222;

        --gray50: #e9eaed;
        --gray100: #dadada;
        --gray200: #85898e;

        --blue300: #49769a;
        --blue400: #086aad;
        --blue500: #0f334c;
        --blue600: #03263a;

        --red400: #ff0000;

        --gradient: "linear-gradient(135deg, #0f334c 0%, #547891 100%)";
      }

      .animeLeft {
        opacity: 0;
        transform: translateX(-20px);
        animation: animeLeft 0.4s forwards;
      }

      @keyframes animeLeft {
        to {
          opacity: 1;
          transform: initial;
        }
      }
    `}
  />
);

export const ContainerPages = styled.section`
  padding: 0 20px;
  /* height: 100vh; */
  /* background-image: url(${BgFormas}) !important; */
`;
