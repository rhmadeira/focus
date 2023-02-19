import { api } from "../axios";

export const getOperations = async (dados): Promise<T> => {};

const getAll = async (
  page = 1,
  filter = ""
): Promise<TPersonTotalCount | Error> => {
  try {
    const urlRelative = `/pessoas?_page=${page}&_limit=${Environment.LIMITE_DE_LINHAS}&nomeCompleto_like=${filter}`;
    const { data, headers } = await api.get(urlRelative);
    if (data) {
      const totalCount = Number(
        headers["x-total-count"] || Environment.LIMITE_DE_LINHAS
      );
      return { data, totalCount };
    }
    return new Error("Não foi possível obter os dados");
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message ||
        "Não foi possível obter os dados"
    );
  }
};

export const operations = { getAll };
