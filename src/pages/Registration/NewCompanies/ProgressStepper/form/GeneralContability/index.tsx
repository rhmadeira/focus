import { Box, Theme, useMediaQuery } from "@mui/material";
import InputControlled from "../../../../../../shared/components/form/InputControlled";
import SubTitle from "../../../../../../shared/components/SubTitle";

interface GeneralContabilityProps {
  control: any;
}

export function GeneralContability({ control }: GeneralContabilityProps) {
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
  return (
    <Box>
      {mdDown ? <SubTitle>Contabilidade:</SubTitle> : null}
      <InputControlled
        controller={{
          name: "contabilidade",
          control,
          defaultValue: "",
        }}
        size="small"
        label="CPF/CNPJ"
      />
    </Box>
  );
}
