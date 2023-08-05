// import { CSSProperties } from "@linaria/react";
// import { GlobalStyles } from "./global";
import { css } from "linaria";

export const GlobalStyles = css`
  :root {
    --color-gray-50: #f0ebeb;
    --color-gray-100: #bdbbbb;
    --color-gray-200: #aaa6a6;
    --color-gray-300: #827c7c;
    --color-gray-400: #595454;
    --color-gray-450: #4d4848;
    --color-gray-500: #353131;
    --color-gray-600: #1e1b1b;

    --color-blue-50: #322dee;
    --color-blue-100: #2722c2;
    --color-blue-200: #1b16a1;
  }
  html {
    box-sizing: border-box;
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  p {
    margin: 0;
  }
  body {
    list-style: none;
    -webkit-font-smoothing: antialiased;
    background-color: var(--color-gray-200);
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
    display: flex;
  }
  ol,
  li {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
`;
