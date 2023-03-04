import { SearchRefFormData } from "../../pages/Reference/schemas/referenceSchema";
import { api } from "./api/axios";
import { ApiResponseModel } from "./schemas/default";
import { IReference } from "./schemas/referenceSchema";

export const getReference = async (reference: SearchRefFormData) => {
  const { data } = await api.get<ApiResponseModel<IReference[]>>(
    `/referencias?_numero=${reference.numero}&_empresa=${reference.nome_emitente}&_ref=${reference.ref}`
  );
  return data;
};
