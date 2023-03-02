import { Navigate, Route, Routes } from "react-router-dom";
import { Profile } from "../pages/Profile";

import Ticket from "../pages/Ticket";
import LayoutSideBar from "../shared/layouts/LayoutSideBar";
import Reference from "../pages/Reference";
import Collaborators from "../pages/Collaborators";
import Companies from "../pages/Companies";
import { NewCollaborators } from "../pages/Collaborators/NewCollaborators";
import { NewCompanies } from "../pages/Companies/NewCompanies";
import EditCollaborator from "../pages/Collaborators/EditCollaborator";
import EditCompany from "../pages/Companies/EditCompany";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<LayoutSideBar />}>
        <Route path="/" element={<a>home</a>} />
        <Route path="referencia" element={<Reference />} />

        <Route path="colaborador" element={<Collaborators />} />
        <Route path="colaborador/novo" element={<NewCollaborators />} />
        <Route path="colaborador/editar/:id" element={<EditCollaborator />} />

        <Route path="empresa" element={<Companies />} />
        <Route path="empresa/nova" element={<NewCompanies />} />
        <Route path="empresa/editar/:id" element={<EditCompany />} />

        <Route path="perfil" element={<Profile />} />
        <Route path="perfil/editar/:id" element={<Profile />} />

        <Route path="titulos" element={<Ticket />} />
      </Route>
    </Routes>
  );
}
