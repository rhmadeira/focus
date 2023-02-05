import { useContext } from "react";
import Login from "./pages/Login";
import { AuthContext } from "./shared/context/AuthContext";
import { AppRoutes } from "./shared/routes/AppRautes";

function App() {
  // const { token } = useContext(AuthContext);
  const token = true;
  return <div>{!token ? <Login /> : <AppRoutes />}</div>;
}

export default App;
