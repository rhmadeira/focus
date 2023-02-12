import Button from "@mui/material/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { useForm } from "react-hook-form";
import {
  Box,
  Divider,
  Icon,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import SubTitle from "../../../shared/components/SubTitle";
import InputControlled from "../../../shared/components/InputControlled";
import MuiDataPicker from "../../../shared/components/MuiDataPicker";
import LayoutFormBase from "../../../shared/layouts/LayoutFormBase";
import { schemaSearchApi, schemaSearchRef } from "../schemas/referenceSchema";

export type SearchRefFormData = zod.infer<typeof schemaSearchRef>;

export default function SearchReference() {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const { control, handleSubmit } = useForm<SearchRefFormData>({
    resolver: zodResolver(schemaSearchRef),
  });

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
      <LayoutFormBase handleSearch={handleSubmit(handleSearchRef)}>
        <SubTitle>Buscar Referência:</SubTitle>
        <Divider />
        <Box
          display="flex"
          marginTop={2}
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
          <Button
            startIcon={<Icon>search</Icon>}
            type="submit"
            variant="contained"
            size="small"
          >
            Buscar
          </Button>
        </Box>
      </LayoutFormBase>
    </Box>
  );
}
