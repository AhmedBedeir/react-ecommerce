import MainHeader from "./components/header/MainHeader";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./Theme";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainHeader />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
