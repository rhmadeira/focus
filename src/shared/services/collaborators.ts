import { NewCollaboratorData } from "../../pages/Collaborators/schemas/colaboratorsSchemas";
import { api } from "./api/axios";
import { ICollaborator } from "./schemas/collaboratorsSchema";
import { ApiResponseModel, ApiResponseModelUsers } from "./schemas/default";

export const getAllCollaborators = async () => {
  const { data } = await api.get<ApiResponseModel<ICollaborator[]>>(
    `/colaboradores`
  );
  return data.value;
};

export const setCollaborator = async (data: NewCollaboratorData) =>
  api.post("/collaborators", data);
