import { Box } from "@mui/material";
import Login from "./pages/Login";
import { AppRoutes } from "./routes/AppRautes";

function App() {
  const token = true;
  return <Box>{!token ? <Login /> : <AppRoutes />}</Box>;
}

export default App;
