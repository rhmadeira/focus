import { Route, Routes } from "react-router-dom";
import Layout from "../../components/container/Layout";
import Home from "../../pages/Home";
import NotFound from "../../pages/NotFound";
import Operations from "../../pages/Operations";
import SearchRef from "../../pages/Operations/SearchRef";
import Registration from "../../pages/Registration";
import Collaborators from "../../pages/Registration/Collaborators";
import Companies from "../../pages/Registration/Companies";
import SearchRegistration from "../../pages/Registration/SearchRegistration";
import Ticket from "../../pages/Ticket";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="operacao" element={<Operations />}>
          <Route path="referencia" element={<SearchRef />} />
        </Route>
        <Route path="cadastro" element={<Registration />}>
          <Route path="buscar" element={<SearchRegistration />} />
          <Route path="colaborador" element={<Collaborators />} />
          <Route path="empresa" element={<Companies />} />
        </Route>
        <Route path="boleto" element={<Ticket />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
