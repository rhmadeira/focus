import { create } from "zustand";
import { ICollaborator } from "../schemas/collaboratorsSchema";
import { ICompany } from "../schemas/companySchema";
import { IReference } from "../schemas/referenceSchema";

type TReference = {
  reference: IReference[];
  company: ICompany[];
  collaborators: ICollaborator[];
  setReference: (data: IReference[]) => void;
  setCompany: (data: ICompany[]) => void;
  setCollaborators: (data: ICollaborator[]) => void;
};

export const useSearch = create<TReference>((set) => ({
  reference: [],
  company: [],
  collaborators: [],
  setReference: (data) => set(() => ({ reference: data })),
  setCompany: (data) => set(() => ({ company: data })),
  setCollaborators: (data) => set(() => ({ collaborators: data })),
}));
