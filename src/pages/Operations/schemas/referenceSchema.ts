// import dayjs, { Dayjs } from "dayjs";
import * as zod from "zod";

export const schemaSearchRef = zod.object({
  // dateStart: zod.instanceof(dayjs as unknown as typeof Dayjs).optional(),
  // dateEnd: zod.string().optional(),
  company: zod.string().optional(),
  reference: zod.string().optional(),
  number: zod.string().optional(),
  nRPS: zod.string().optional(),
});

export type SearchRefFormData = zod.infer<typeof schemaSearchRef>;

export const schemaSearchApi = schemaSearchRef.transform((data) => {
  return {
    ...data,
    // dateStart: data.dateStart?.format("YYYY-MM-DDTHH:mm:ssZ[Z]"),
  };
});
