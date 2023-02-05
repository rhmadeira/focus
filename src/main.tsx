import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import App from "./App";
import { AuthProvider } from "./shared/context/AuthContext";
import { globalStyles } from "./shared/themes/global";
import { AppThemeProvider } from "./shared/context/ThemeContext";
import { DarkTheme, LightTheme } from "./shared/themes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <AppThemeProvider>
        {/* <ThemeProvider theme={LightTheme}> */}
        {globalStyles}
        <BrowserRouter>
          <App />
        </BrowserRouter>
        {/* </ThemeProvider> */}
      </AppThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);
