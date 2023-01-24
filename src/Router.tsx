import { Route, Routes } from "react-router-dom";
import Layout from "./components/container/Layout";
import Home from "./pages/Operacoes";
import NotFound from "./pages/NotFound";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
