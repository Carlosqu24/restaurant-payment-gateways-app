import { Box, Paper, CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes as appRoutes } from "./routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";

export function App() {

  // define theme
  const theme = createTheme({
    palette: {
      primary: {
        light: "#63b8ff",
        main: "#0989e3",
        dark: "#005db0",
        contrastText: "#000",
      },
      secondary: {
        main: "#4db6ac",
        light: "#82e9de",
        dark: "#00867d",
        contrastText: "#000",
      },
    },
   
    typography: {
      fontFamily: `"Inter", "IBM Plex Sans"`,
      
    },
  });

  return (
    <ThemeProvider theme={theme} >

      <Router>
        <Navbar />

      <div className="p-4" >
      <Routes>
          {appRoutes.map((route) => (
            <Route
              key={route.key}
              path={route.path}
              element={<route.component />}
            />
          ))}
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>


      </Router>
    </ThemeProvider>
  );
}

export function WrappedApp() {
  return <App />
}
