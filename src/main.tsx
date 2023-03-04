import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./shared/context/AuthContext";
import { AppThemeProvider } from "./shared/context/ThemeContext";
import { globalStyles } from "./shared/themes/global";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AuthProvider>
    <AppThemeProvider>
      {globalStyles}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppThemeProvider>
  </AuthProvider>
);
