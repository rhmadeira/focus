import { Box, Theme, useMediaQuery } from "@mui/material";
import InputControlled from "../../../../../../shared/components/InputControlled";
import SelectControlled from "../../../../../../shared/components/SelectControlled";
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
    <Box display="flex" flexDirection="column" gap={1}>
      {mdDown ? <SubTitle>Identificação:</SubTitle> : null}
      <Box
        display="flex"
        flex={1}
        gap={1}
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
        {chekedPerson === 1 ? (
          <InputControlled
            controller={{
              name: "cpf",
              control,
              defaultValue: "",
            }}
            size="small"
            label="CPF"
          />
        ) : (
          <InputControlled
            controller={{ name: "cnpj", control, defaultValue: "" }}
            size="small"
            label="CNPJ"
          />
        )}
        <InputControlled
          controller={{
            name: "nomeFantasia",
            control,
            defaultValue: "",
          }}
          size="small"
          label="Nome Fantasia"
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
