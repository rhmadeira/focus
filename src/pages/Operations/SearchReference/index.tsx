import Button from "@mui/material/Button";
import InputBasic from "../../../components/shared/Inputs/InputBasic";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { useForm } from "react-hook-form";
import { Box } from "@mui/material";
import SubTitle from "../../../shared/components/SubTitle";

const schemaSearchRef = zod.object({
  // dateStart: zod.instanceof(dayjs as unknown as typeof Dayjs).optional(),
  dateEnd: zod.string().optional(),
  company: zod.string().optional(),
  reference: zod.string().optional(),
  number: zod.string().optional(),
  nRPS: zod.string().optional(),
});

const schemaSearchApi = schemaSearchRef.transform((data) => {
  return {
    ...data,
    // dateStart: data.dateStart?.format("YYYY-MM-DDTHH:mm:ssZ[Z]"),
  };
});

export type SearchRefFormData = zod.infer<typeof schemaSearchRef>;

export default function SearchReference() {
  const { control, handleSubmit } = useForm<SearchRefFormData>({
    resolver: zodResolver(schemaSearchRef),
  });

  function handleSearchRef(data: SearchRefFormData) {
    const apiData = schemaSearchApi.parse(data);
    console.log(apiData);
  }
  return (
    <Box display="flex" flexDirection="column" gap={2} marginTop="10px">
      <SubTitle>Busca de Referência:</SubTitle>
      <Box component="form" onSubmit={handleSubmit(handleSearchRef)}>
        <InputBasic
          controller={{
            control,
            name: "company",
            defaultValue: "",
          }}
          label="Empresa"
          size="small"
          type="text"
        />
        <InputBasic
          controller={{
            control,
            name: "reference",
            defaultValue: "",
          }}
          label="Referência"
          size="small"
        />
        <InputBasic
          controller={{
            control,
            name: "number",
            defaultValue: "",
          }}
          label="Número"
          size="small"
        />

        <InputBasic
          controller={{
            control,
            name: "nRPS",
            defaultValue: "",
          }}
          label="N.RPS"
          size="small"
        />
        <Button type="submit" variant="contained">
          Buscar
        </Button>
      </Box>
    </Box>
  );
}
