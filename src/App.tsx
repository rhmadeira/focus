import Login from "./pages/Login";
import Router from "./Router";

const token = true;

function App() {
  return <div>{!token ? <Login /> : <Router />}</div>;
}

export default App;
