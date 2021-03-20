import { useState } from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../components/layout";
import { GlobalStyles, dark, light } from "../styles/global";

function App({ Component, pageProps }) {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    localStorage.setItem("darkTheme", !darkTheme);
  };

  const rehydrateTheme = () => {
    setDarkTheme(false);
  };

  return (
    <ThemeProvider theme={darkTheme ? dark : light}>
      <Layout
        darkTheme={darkTheme}
        toggleTheme={toggleTheme}
        rehydrateTheme={rehydrateTheme}
      >
        <GlobalStyles />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
