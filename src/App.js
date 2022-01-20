import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import { GlobalStyle } from "./styles/global";
import { ThemeContext } from "./context/themeContext";
import DashBoard from "./containers/DashBoard";

const App = () => {
  const context = useContext(ThemeContext);
  const { theme } = context;

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyle />
        <DashBoard />
      </>
    </ThemeProvider>
  );
};

export default App;
