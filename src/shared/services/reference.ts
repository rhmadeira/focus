import { api } from "./api/axios";
import { ApiResponseModel } from "./schemas/default";
import { IReference } from "./schemas/referenceSchema";

export const getReference = async () => {
  const { data } = await api.get<ApiResponseModel<IReference[]>>(
    `/referencias`
  );
  return data;
};
