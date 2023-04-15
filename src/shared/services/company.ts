import { NewCompanyData } from "../../pages/Companies/schemas";
import { api } from "./api/axios";
import { ICompany } from "./schemas/companySchema";
import { ApiResponseModel } from "./schemas/default";

export const setCompany = async (data: NewCompanyData) =>
  api.post("/companies", data);

export const getAllCompanies = async () => {
  const { data } = await api.get<ApiResponseModel<ICompany[]>>(`/empresas`);
  return data.value;
};
