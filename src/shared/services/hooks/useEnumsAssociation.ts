import { create } from "zustand";
import { ICommunication, IIntegration } from "../schemas/process";

type TEnumsAssociation = {
  communication: ICommunication[];
  integration: IIntegration[];
  setCommunications: (communication: ICommunication[]) => void;
  setIntegration: (integration: IIntegration[]) => void;
  // setEnums: (enums: {
  //   communication: ICommunication[];
  //   integration: IIntegration[];
  // }) => void;
};

const useEnumsAssociation = create<TEnumsAssociation>((set) => ({
  communication: [],
  integration: [],
  // setEnums: ({ communication, integration }) =>
  //   set({
  //     communication,
  //     integration,
  //   }),
  setCommunications: (communication) => set({ communication }),
  setIntegration: (integration) => set({ integration }),
}));

export default useEnumsAssociation;
