import { Route, Routes } from "react-router-dom";
import Layout from "../components/container/Layout";
import Operations from "../pages/Operations";
import NotFound from "../pages/NotFound";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Operations />} />
        <Route path="operacoes" element={<Operations />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
