import { Box, Theme, useMediaQuery } from "@mui/material";
import InputControlled from "../../../../../../shared/components/form/InputControlled";
import SelectControlled from "../../../../../../shared/components/form/SelectControlled";
import SubTitle from "../../../../../../shared/components/SubTitle";

interface IIdentificationProps {
  control: any;
  chekedPerson: number;
}

export function Identification({
  control,
  chekedPerson,
}: IIdentificationProps) {
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      {mdDown ? <SubTitle>Identificação:</SubTitle> : null}
      <Box
        display="flex"
        flex={1}
        gap={2}
        flexWrap={{ xs: "wrap", sm: "nowrap" }}
      >
        {" "}
        <SelectControlled
          controller={{ name: "pessoa", control, defaultValue: "" }}
          size="small"
          textSelect="Tipo de pessoa"
          arrayMenuItem={[
            { index: 1, label: "Física" },
            { index: 2, label: "Jurídica" },
          ]}
        />
        <InputControlled
          controller={{
            name: "cpf",
            control,
            defaultValue: "",
          }}
          size="small"
          label="CPF"
          sx={{ display: chekedPerson === 1 ? "block" : "none" }}
        />
        <InputControlled
          controller={{ name: "cnpj", control, defaultValue: "" }}
          size="small"
          label="CNPJ"
          sx={{ display: chekedPerson === 2 ? "block" : "none" }}
        />
        <InputControlled
          controller={{
            name: "nomeFantasia",
            control,
            defaultValue: "",
          }}
          size="small"
          label="Nome Fantasia"
          sx={{ display: chekedPerson === 2 ? "block" : "none" }}
        />
      </Box>
      <Box
        display="flex"
        flex={1}
        gap={2}
        flexWrap={{ xs: "wrap", sm: "nowrap" }}
      >
        <InputControlled
          controller={{
            name: "inscricaoEstadual",
            control,
            defaultValue: "",
          }}
          size="small"
          label="Inscrição Estadual"
        />
        <InputControlled
          controller={{
            name: "inscricaoMunicipal",
            control,
            defaultValue: "",
          }}
          size="small"
          label="Inscrição Municipal"
        />
        <SelectControlled
          controller={{ name: "regime", control, defaultValue: "" }}
          size="small"
          textSelect="Regime Tributário"
          arrayMenuItem={[
            { index: 1, label: "Simples Nacional" },
            { index: 2, label: "Simples Nacional receita bruta" },
            { index: 3, label: "Regime Normal" },
          ]}
        />
      </Box>
    </Box>
  );
}
