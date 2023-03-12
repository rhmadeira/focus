import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import App from "./App";
import { AuthProvider } from "./shared/context/AuthContext";
import { globalStyles } from "./shared/themes/global";
import { ThemeProvider } from "@mui/material";
import { useThemeApp } from "./shared/services/hooks/useThemeApp";
import { ThemeApp } from "./shared/themes/ThemeApp";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AuthProvider>
    <ThemeApp>
      {globalStyles}
      <BrowserRouter>
        <App />
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <ToastContainer />
      </BrowserRouter>
    </ThemeApp>
  </AuthProvider>
);
