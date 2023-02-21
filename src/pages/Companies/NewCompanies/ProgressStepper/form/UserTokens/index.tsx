import { Box, Theme, useMediaQuery } from "@mui/material";
import InputControlled from "../../../../../../shared/components/form/InputControlled";
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
          name: "tokenHom",
          control,
          defaultValue: "",
        }}
        size="small"
        label="Token de Homologação"
      />
      <InputControlled
        controller={{
          name: "tokenProd",
          control,
          defaultValue: "",
        }}
        size="small"
        label="Token de Produção"
      />
    </Box>
  );
}
