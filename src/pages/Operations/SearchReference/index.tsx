import Button from "@mui/material/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { useForm } from "react-hook-form";
import { Box, Theme, Typography, useMediaQuery } from "@mui/material";
import SubTitle from "../../../shared/components/SubTitle";
import InputControlled from "../../../shared/components/InputControlled";
import Paper from "@mui/material/Paper";
import MuiDataPicker from "../../../shared/components/MuiDataPicker";

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
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  function handleSearchRef(data: SearchRefFormData) {
    const apiData = schemaSearchApi.parse(data);
    console.log(apiData);
  }
  return (
    <Box
      display="flex"
      flexDirection="column"
      flex="1"
      alignItems="center"
      gap={2}
      marginTop="10px"
    >
      <Box
        display="flex"
        flexDirection="column"
        gap={2}
        component="form"
        onSubmit={handleSubmit(handleSearchRef)}
        width={smDown ? "auto" : "70%"}
      >
        <SubTitle>Buscar Referência:</SubTitle>

        <Box
          component={Paper}
          display="flex"
          flexDirection="column"
          padding={2}
          gap={1}
        >
          <Box
            display="flex"
            alignItems="center"
            gap={2}
            flexWrap={{ xs: "wrap", sm: "nowrap" }}
          >
            <MuiDataPicker textPlaceholder="Data inicial" />
            {smDown ? null : <Typography component="span">Até</Typography>}
            <MuiDataPicker textPlaceholder="Data final" />
          </Box>
          <Box
            display="flex"
            flex={1}
            gap={1}
            flexWrap={{ xs: "wrap", sm: "nowrap" }}
          >
            <InputControlled
              controller={{
                control,
                name: "company",
                defaultValue: "",
              }}
              label="Empresa"
              size="small"
              type="text"
            />
            <InputControlled
              controller={{
                control,
                name: "reference",
                defaultValue: "",
              }}
              label="Referência"
              size="small"
            />
          </Box>

          <Box
            display="flex"
            flex={1}
            gap={1}
            flexWrap={{ xs: "wrap", sm: "nowrap" }}
          >
            <InputControlled
              controller={{
                control,
                name: "number",
                defaultValue: "",
              }}
              label="Número"
              size="small"
            />

            <InputControlled
              controller={{
                control,
                name: "nRPS",
                defaultValue: "",
              }}
              label="N.RPS"
              size="small"
            />
          </Box>

          <Box>
            <Button type="submit" variant="contained" size="small">
              Buscar
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
