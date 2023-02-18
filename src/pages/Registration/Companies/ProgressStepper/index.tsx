import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Divider, Switch, Theme, useMediaQuery } from "@mui/material";
import LayoutFormBase from "../../../../shared/layouts/LayoutFormBase";
import { useForm } from "react-hook-form";
import InputControlled from "../../../../shared/components/InputControlled";
import SelectControlled from "../../../../shared/components/SelectControlled";
import SubTitle from "../../../../shared/components/SubTitle";
import FiscalDocuments from "./form/FiscalDocuments";

const steps = [
  "Identificação",
  "Contato/Endereço",
  "Responsável",
  "Contabilidade",
  "Tokens",
  "Documentos Fiscais",
];
// {
//   <FiscalDocuments
//                     controller={[{ name: "nfs", control, defaultValue: "" }]}
//                     label="NFs"
//                   />
// }

export default function StepperForm() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
  const { handleSubmit, control, watch } = useForm();

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleNext = () => {
    let newSkipped = skipped;
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  function handleSaveNewCompany(data: any) {
    console.log(data);
  }

  const handleReset = () => {
    setActiveStep(0);
  };

  const chekedPerson = watch("pessoa");
  console.log(chekedPerson);

  return (
    <>
      <LayoutFormBase handleSearch={handleSubmit(handleSaveNewCompany)}>
        <SubTitle>Nova Empresa</SubTitle>
        <Divider />
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps: { completed?: boolean } = {};
              return (
                <Step key={label}>
                  <StepLabel>{!mdDown ? label : null}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          <>
            <Box marginTop={2}>
              {/* Identificação */}
              {activeStep === 0 ? (
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
              ) : activeStep === 1 ? (
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
              ) : activeStep === 2 ? (
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
              ) : activeStep === 3 ? (
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
              ) : activeStep === 4 ? (
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
              ) : activeStep === 5 ? (
                <Box>
                  {mdDown ? <SubTitle>Documentos Fiscais:</SubTitle> : null}
                  <FiscalDocuments
                    controller={[{ name: "nfs", control, defaultValue: "" }]}
                    label="NFs"
                  />
                  {/* <Switch name="emitirNf" /> */}
                </Box>
              ) : (
                <Box>
                  <Typography variant="h4">
                    Por favor verifique os dados e clique em salvar.
                  </Typography>
                </Box>
              )}
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                variant="contained"
                disabled={activeStep === 0}
                onClick={handleBack}
                size="small"
                sx={{ mr: 1 }}
              >
                Voltar
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              {activeStep !== steps.length && (
                <Button size="small" variant="contained" onClick={handleNext}>
                  Próximo
                </Button>
              )}
              {activeStep === steps.length && (
                <Button variant="contained" size="small" type="submit">
                  Salvar
                </Button>
              )}
            </Box>
          </>
        </Box>
      </LayoutFormBase>
    </>
  );
}
