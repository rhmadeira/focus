import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import Operations from "../pages/Operations";
import SearchReference from "../pages/Operations/SearchReference";
import { Profile } from "../pages/Profile";
import Registration from "../pages/Registration";
import { NewCollaborators } from "../pages/Registration/NewCollaborators";
import { NewCompanies } from "../pages/Registration/NewCompanies";
import SearchRegistration from "../pages/Registration/SearchRegistration";
import Ticket from "../pages/Ticket";
import LayoutSideBar from "../shared/layouts/LayoutSideBar";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LayoutSideBar />}>
        <Route path="/home" element={<Home />} />
        <Route path="operacao" element={<Operations />}>
          <Route path="referencia" element={<SearchReference />} />
        </Route>
        <Route path="cadastro" element={<Registration />}>
          <Route path="buscar" element={<SearchRegistration />} />
          <Route path="colaborador" element={<NewCollaborators />} />
          <Route path="empresa" element={<NewCompanies />} />
        </Route>
        <Route path="boleto" element={<Ticket />} />
        <Route path="perfil" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
