// import dayjs, { Dayjs } from "dayjs";
import * as zod from "zod";

export const schemaSearchRef = zod.object({
  nome_emitente: zod.string().optional(),
  ref: zod.string().optional(),
  numero: zod.string().optional(),
});

export type SearchRefFormData = zod.infer<typeof schemaSearchRef>;

export const schemaSearchApi = schemaSearchRef.transform((data) => {
  return {
    ...data,
  };
});
