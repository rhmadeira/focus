import { Box, Theme, useMediaQuery } from "@mui/material";
import InputControlled from "../../../../../../shared/components/InputControlled";
import SubTitle from "../../../../../../shared/components/SubTitle";

interface UserTokensProps {
  control: any;
}

export function UserTokens({ control }: UserTokensProps) {
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
  return (
    <Box>
      {mdDown ? <SubTitle>Tokens:</SubTitle> : null}
      <InputControlled
        controller={{
          name: "tokenHomologacao",
          control,
          defaultValue: "",
        }}
        size="small"
        label="Token de Homologação"
      />
      <InputControlled
        controller={{
          name: "tokenProducao",
          control,
          defaultValue: "",
        }}
        size="small"
        label="Token de Produção"
      />
    </Box>
  );
}
