import { Box, Theme, useMediaQuery } from "@mui/material";
import InputControlled from "../../../../../../shared/components/form/InputControlled";
import SubTitle from "../../../../../../shared/components/SubTitle";

interface ResponsibleProps {
  control: any;
}

export function Responsible({ control }: ResponsibleProps) {
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  return (
    <Box>
      {mdDown ? <SubTitle>Responsável:</SubTitle> : null}
      <Box
        display="flex"
        gap={2}
        maxWidth="900px"
        flexDirection={smDown ? "column" : "row"}
      >
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
    </Box>
  );
}
