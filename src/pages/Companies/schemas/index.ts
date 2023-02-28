import * as Zod from "zod";

export const schemaNewCompany = Zod.object({
  pessoa: Zod.number(),
  nome: Zod.string().optional(),
  nomeFantasia: Zod.string().optional(),
  cnpj: Zod.string().optional(),
  cpf: Zod.string().optional(),
  inscricaoEstadual: Zod.string().optional(),
  inscricaoMunicipal: Zod.string().optional(),
  regime: Zod.number().optional(),
  email: Zod.string().optional(),
  telefone: Zod.string().optional(),
  cep: Zod.string().optional(),
  logradouro: Zod.string().optional(),
  numero: Zod.string().optional(),
  complemento: Zod.string().optional(),
  bairro: Zod.string().optional(),
  cidade: Zod.string().optional(),
  estado: Zod.string().optional(),
  nomeResponsavel: Zod.string().optional(),
  contabilidade: Zod.string().optional(),
  tokenHom: Zod.string().optional(),
  tokenProd: Zod.string().optional(),
});

export type NewCompanyData = Zod.infer<typeof schemaNewCompany>;

export const NewCompanyDataResponse = Zod.object({
  id: Zod.number(),
  pessoa: Zod.number(),
  nome: Zod.string().optional(),
  nomeFantasia: Zod.string().optional(),
  cnpj: Zod.string().optional(),
  cpf: Zod.string().optional(),
  inscricaoEstadual: Zod.string().optional(),
  inscricaoMunicipal: Zod.string().optional(),
  regime: Zod.number().optional(),
  email: Zod.string().optional(),
  telefone: Zod.string().optional(),
  cep: Zod.string().optional(),
  logradouro: Zod.string().optional(),
  numero: Zod.string().optional(),
  complemento: Zod.string().optional(),
  bairro: Zod.string().optional(),
  cidade: Zod.string().optional(),
  estado: Zod.string().optional(),
  nomeResponsavel: Zod.string().optional(),
  contabilidade: Zod.string().optional(),
  tokenHom: Zod.string().optional(),
  tokenProd: Zod.string().optional(),
});

export type NewCompanyDataResponse = Zod.infer<typeof NewCompanyDataResponse>;
