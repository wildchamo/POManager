import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { HashRouter, Routes, Route } from "react-router-dom";
import { POProvider, PrivateRoute } from "./context";

const font =  "'Work Sans', sans-serif";

const theme = createTheme({
  typography: {
    fontFamily: font,
  },
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
        <POProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
          </Routes>
        </POProvider>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
