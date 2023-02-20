import { Box } from "@mui/material";
import { useContext } from "react";
import Login from "./pages/Login";
import { AppRoutes } from "./routes/AppRautes";
import { AuthContext } from "./shared/context/AuthContext";

function App() {
  // const { token } = useContext(AuthContext);
  const token = true;
  return <Box>{!token ? <Login /> : <AppRoutes />}</Box>;
}

export default App;
