import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import { createMuiTheme, ThemeProvider } from "@mui/material/styles";
import { HashRouter, Routes, Route } from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#9e0b0f",
    },
    secondary: {
      main: "#FAFAFB",
      contrastText: "#9E0B0F",
      dark: "#9e0b0f",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
