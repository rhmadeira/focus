import { QueryClientProvider } from "@tanstack/react-query";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import App from "./App";
import { AuthProvider } from "./shared/context/AuthContext";
import { queryClient } from "./shared/services/queryClient";
import { globalStyles } from "./shared/themes/global";
import { ThemeApp } from "./shared/themes/ThemeApp";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  </AuthProvider>
);
