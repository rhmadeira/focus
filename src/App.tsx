import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Login from "./pages/Login";
import Router from "./Router";

function App() {
  // const { token } = useContext(AuthContext);
  const token = true;
  return <div>{!token ? <Login /> : <Router />}</div>;
}

export default App;
