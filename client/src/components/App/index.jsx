import { useState, createContext, useContext } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";

import Light from "../../assets/styles/themes/Light";
import Dark from "../../assets/styles/themes/Dark";
import GlobalStyles from "../../assets/styles/global";

import Header from "../Header";
import HandleRoutes from "../../Routes";

import { Container } from "./style";

const ThemeContext = createContext();

const App = () => {
  const [isLightMode, setIsLightMode] = useState(true);

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <Router>
      <ThemeContext.Provider value={{ isLightMode, toggleTheme }}>
        <ThemeProvider theme={isLightMode ? Light : Dark}>
          <GlobalStyles />
          <Container>
            <Header />
            <HandleRoutes />
          </Container>
        </ThemeProvider>
      </ThemeContext.Provider>
    </Router>
  );
};

export const useTheme = () => useContext(ThemeContext);
export default App;
