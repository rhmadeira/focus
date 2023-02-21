import axios from "axios";
import { NewCollaboratorData } from "../../../../pages/Collaborators/schemas/colaboratorsSchemas";
import { api } from "../axios";

export const getCollaborators = async (nome: string) =>
  api.get(`/collaborators?name_like=${nome}`);

export const setColaborator = async (data: NewCollaboratorData) => {
  try {
    const response = await api.post("/collaborators", data);
    return response.data;
  } catch (error) {
    return error;
  }
};
