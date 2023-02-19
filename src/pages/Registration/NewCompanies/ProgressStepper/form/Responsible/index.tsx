import { Box, Theme, useMediaQuery } from "@mui/material";
import InputControlled from "../../../../../../shared/components/InputControlled";
import SubTitle from "../../../../../../shared/components/SubTitle";

interface ResponsibleProps {
  control: any;
}

export function Responsible({ control }: ResponsibleProps) {
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
  return (
    <Box>
      {mdDown ? <SubTitle>Responsável:</SubTitle> : null}
      <InputControlled
        controller={{
          name: "nomeResponsavel",
          control,
          defaultValue: "",
        }}
        size="small"
        label="Nome"
      />
      <InputControlled
        controller={{
          name: "cpfResponsavel",
          control,
          defaultValue: "",
        }}
        size="small"
        label="CPF"
      />
    </Box>
  );
}
