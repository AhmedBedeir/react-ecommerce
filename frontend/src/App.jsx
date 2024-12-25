import MainHeader from "./components/header/MainHeader";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./Theme";
import Hero from "./components/hero/Hero";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainHeader />
        <Hero />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
