import { createGlobalStyle } from "styled-components";

export const light = {
  bg: "white",
  fg: "#1B1C1E",
  text: "black",
  accent: "#eef5ff",
  modal: "rgba(238, 245, 255, 0.6)",
};

export const dark = {
  bg: "#050505",
  fg: "white",
  text: "rgba(255, 255, 255, 0.87)",
  accent: "#16161d",
  modal: "rgba(43, 43, 43, 0.6)",
};

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.bg};
    color: ${(props) => props.theme.fg};
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: "DM Sans", BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  }

  #__next {
    width: 100%;
  }

  a {
    text-decoration: none;
    font-size: 14px;
    color: #000;
  }

  h1 {
    font-size: 72px;
    letter-spacing: -0.05em;
    margin-block-start: 0px;
    margin-block-end: 0px;
  }

  h2 {
    font-size: 36px;
    letter-spacing: -0.05em;
    margin-block-start: 0px;
    margin-block-end: 0px;
  }

  h3 {
    font-size: 24px;
    letter-spacing: -0.05em;
    margin-block-start: 0px;
    margin-block-end: 0px;
  }

  p {
    font-size: 18px;
    color: ${(props) => props.theme.text};
    margin-block-start: 0px;
    margin-block-end: 0px;
  }

  ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  font-size: 18px;
  letter-spacing: 0.1em;
  margin-bottom: 24px;
}
  `;
