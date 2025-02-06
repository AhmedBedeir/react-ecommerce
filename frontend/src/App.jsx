import MainHeader from "./components/header/MainHeader";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./Theme";
import Hero from "./components/hero/Hero";
import MainContent from "./components/maincontent/MainContent";
import ScrollToTop from "./components/scroll/ScrollToTop";
import Footer from "./components/footer/Footer";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainHeader />
        <Hero />
        <MainContent />
        <ScrollToTop />
        <Footer />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
