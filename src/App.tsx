import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Login from "./pages/Login";
import { AppRoutes } from "./shared/routes/AppRautes";

function App() {
  // const { token } = useContext(AuthContext);
  const token = true;
  return <div>{!token ? <Login /> : <AppRoutes />}</div>;
}

export default App;
