import { NewCollaboratorData } from "../../../../pages/Registration/schemas/colaboratorsSchemas";
import { api } from "../axios";

export const setColaborator = async (data: NewCollaboratorData) => {
  try {
    const response = await api.post("/colaborators", data);
    return response.data;
  } catch (error) {
    return error;
  }
};
