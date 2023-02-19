import { Box, Theme, Typography, useMediaQuery } from "@mui/material";
import InputControlled from "../../../../../../shared/components/InputControlled";
import SelectControlled from "../../../../../../shared/components/SelectControlled";
import SubTitle from "../../../../../../shared/components/SubTitle";

export function ContactAddress({ control }: any) {
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
  return (
    <Box display="flex" flexDirection="column" gap={1}>
      {mdDown ? <SubTitle>Contato/Endereço:</SubTitle> : null}
      <Typography variant="body2">Contato</Typography>{" "}
      <Box display="flex" maxWidth="800px" gap={1}>
        <InputControlled
          controller={{
            name: "email",
            control,
            defaultValue: "",
          }}
          size="small"
          label="E-mail"
        />
        <InputControlled
          controller={{
            name: "telefone",
            control,
            defaultValue: "",
          }}
          size="small"
          label="Telefone"
        />
      </Box>
      <Typography variant="body2">Endereço</Typography>{" "}
      <Box>
        {" "}
        <InputControlled
          controller={{
            name: "cep",
            control,
            defaultValue: "",
          }}
          size="small"
          label="CEP"
        />
        <InputControlled
          controller={{
            name: "logradouro",
            control,
            defaultValue: "",
          }}
          size="small"
          label="Logradouro"
        />
        <InputControlled
          controller={{
            name: "numero",
            control,
            defaultValue: "",
          }}
          size="small"
          label="Número"
        />
        <InputControlled
          controller={{
            name: "complemento",
            control,
            defaultValue: "",
          }}
          size="small"
          label="Complemento"
        />
        <InputControlled
          controller={{
            name: "bairro",
            control,
            defaultValue: "",
          }}
          size="small"
          label="Bairro"
        />
        <InputControlled
          controller={{
            name: "cidade",
            control,
            defaultValue: "",
          }}
          size="small"
          label="Cidade"
        />
        <SelectControlled
          controller={{ name: "uf", control, defaultValue: "" }}
          size="small"
          textSelect="Estado"
          arrayMenuItem={[
            { index: 1, label: "ES" },
            { index: 2, label: "RJ" },
          ]}
        />
      </Box>
    </Box>
  );
}
