import { Route, Routes } from "react-router-dom";
import Layout from "../components/container/Layout";
import Home from "../pages/Home";
import Operations from "../pages/Operations";
import Registration from "../pages/Registration";
import Ticket from "../pages/Ticket";
import NotFound from "../pages/NotFound";
import Collaborators from "../pages/Registration/Collaborators";
import Companies from "../pages/Registration/Companies";
import SearchRef from "../pages/Operations/SearchRef";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="operacao" element={<Operations />}>
          <Route path="referencia" element={<SearchRef />} />
        </Route>
        <Route path="cadastro" element={<Registration />}>
          <Route path="colaborador" element={<Collaborators />} />
          <Route path="empresa" element={<Companies />} />
        </Route>
        <Route path="boleto" element={<Ticket />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
