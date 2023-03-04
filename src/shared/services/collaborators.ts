import axios from "axios";
import { NewCollaboratorData } from "../../pages/Collaborators/schemas/colaboratorsSchemas";
import { api } from "./api/axios";

export const getCollaborators = async (nome: string) =>
  api.get(`/collaborators?name_like=${nome}`);

export const setCollaborator = async (data: NewCollaboratorData) =>
  api.post("/collaborators", data);
