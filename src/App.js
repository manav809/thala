import Navbar from "./components/Navbar";
import Main from "./Main";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";
function App() {
  const [darkMode, setDarkMode] = useState(true);
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Navbar darkMode={darkMode} change={() => setDarkMode(!darkMode)}/>
        <Main />
      </div>
    </ThemeProvider>
  );
}

export default App;
