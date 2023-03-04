import axios from "axios";
import { NewCompanyData } from "../../pages/Companies/schemas";
import { api } from "./api/axios";

export const setCompany = async (data: NewCompanyData) =>
  api.post("/companies", data);

export const getCompanies = async (nome: string) =>
  api.get(`/companies?cpf_like=${nome}`);
