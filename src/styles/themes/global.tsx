import { css, Global } from "@emotion/react";

export const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        box-sizing: border-box;
        background: var(--gray50);

        padding: 0;
        margin: 0;

        overflow-x: hidden;

        font-family: "Poppins", sans-serif;
        color: #222222;

        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
      }
      body::-webkit-scrollbar {
        width: 4px;
      }
      body::-webkit-scrollbar-track {
        background: #03263a;
      }
      body::-webkit-scrollbar-thumb {
        background-color: var(--blue400);
        border-radius: 20px;
      }

      :root {
        --white: #f8f9fc;
        --White100: #f7efd8;
        --black: #222222;

        --gray50: #e9eaed;
        --gray100: #dadada;
        --gray200: #85898e;

        --blue300: #25759a;
        --blue400: #086aad;
        --blue500: #0f334c;
        --blue600: #03263a;

        --red400: #ff0000;
      }
      @keyframes loading {
        to {
          transform: rotate(1turn);
        }
      }
    `}
  />
);
