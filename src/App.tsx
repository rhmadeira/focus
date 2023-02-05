import { useContext } from "react";
import Login from "./pages/Login";
import { AppRoutes } from "./routes/AppRautes";
import { AuthContext } from "./shared/context/AuthContext";

function App() {
  // const { token } = useContext(AuthContext);
  const token = true;
  return <div>{!token ? <Login /> : <AppRoutes />}</div>;
}

export default App;
