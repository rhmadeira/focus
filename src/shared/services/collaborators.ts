import { NewCollaboratorData } from "../../pages/Collaborators/schemas/colaboratorsSchemas";
import { api } from "./api/axios";
import { ICollaborator } from "./schemas/collaboratorsSchema";
import { ApiResponseModelUsers } from "./schemas/default";

export const getAllCollaborators = async () => {
  const { data } = await api.get<ApiResponseModelUsers<ICollaborator[]>>(
    `/colaboradores`
  );
  return data.users;
};

export const setCollaborator = async (data: NewCollaboratorData) =>
  api.post("/collaborators", data);
