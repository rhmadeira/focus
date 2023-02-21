import { Navigate, Route, Routes } from "react-router-dom";
import { Profile } from "../pages/Profile";

import Ticket from "../pages/Ticket";
import LayoutSideBar from "../shared/layouts/LayoutSideBar";
import Reference from "../pages/Reference";
import Collaborators from "../pages/Collaborators";
import Companies from "../pages/Companies";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<LayoutSideBar />}>
        <Route path="/" element={<Navigate to="/referencia" />} />
        <Route path="referencia" element={<Reference />} />
        <Route path="colaborador" element={<Collaborators />} />
        <Route path="empresa" element={<Companies />} />
        <Route path="titulos" element={<Ticket />} />
        <Route path="perfil" element={<Profile />} />

        {/* <Route path="operacao" element={<Operations />}></Route>
        <Route path="cadastro" element={<Registration />}>
          <Route path="novocolaborador" element={<NewCollaborators />} />
          <Route path="novaempresa" element={<NewCompanies />} />
        </Route> */}
      </Route>
    </Routes>
  );
}
