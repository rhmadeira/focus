import { SearchRefFormData } from "../../pages/Reference/schemas/referenceSchema";
import { api } from "./api/axios";
import { ApiResponseModel } from "./schemas/default";
import { IReference } from "./schemas/referenceSchema";

export const getReference = async (reference: SearchRefFormData) => {
  const { data } = await api.get<ApiResponseModel<IReference[]>>(
    `/referencias?_numero=${reference.number}&_empresa=${reference.company}&_ref=${reference.reference}&_nRPS=${reference.nRPS}`
  );
  return data;
};
