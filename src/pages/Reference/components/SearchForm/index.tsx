import { Box, Theme, useMediaQuery } from "@mui/material";
import InputControlled from "../../../../shared/components/form/InputControlled";

interface ISearchForm {
  control: any;
}

export default function SearchForm({ control }: ISearchForm) {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  return (
    <Box
      display="flex"
      flex={1}
      gap={smDown ? 1 : 2}
      flexWrap={{ xs: "wrap", sm: "nowrap" }}
      minWidth="200px"
    >
      <InputControlled
        controller={{
          control,
          name: "nome_emitente",
          defaultValue: "",
        }}
        label="Empresa"
        size="small"
        type="text"
      />
      <InputControlled
        controller={{
          control,
          name: "ref",
          defaultValue: "",
        }}
        label="Referência"
        size="small"
      />

      <InputControlled
        controller={{
          control,
          name: "numero",
          defaultValue: "",
        }}
        label="Número"
        size="small"
      />
    </Box>
  );
}
