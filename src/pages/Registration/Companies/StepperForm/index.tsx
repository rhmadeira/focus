import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Divider, StepContent, Theme, useMediaQuery } from "@mui/material";
import LayoutFormBase from "../../../../shared/layouts/LayoutFormBase";
import { useForm } from "react-hook-form";
import InputControlled from "../../../../shared/components/InputControlled";
import SelectControlled from "../../../../shared/components/SelectControlled";
import SubTitle from "../../../../shared/components/SubTitle";

const steps = [
  "Identificação",
  "Contato/Endereço",
  "Responsável",
  "Contabilidade",
  "Tokens",
  "Documentos Fiscais",
];

export default function StepperForm() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
  const { handleSubmit, control } = useForm();

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
  console.log(activeStep);

  return (
    <>
      <LayoutFormBase handleSearch={handleSubmit(handleSaveNewCompany)}>
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps: { completed?: boolean } = {};
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel>{!mdDown ? label : null}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          <Divider sx={{ marginTop: "10px" }} />
          <>
            <Box marginTop={2}>
              {activeStep === 0 ? (
                <Box>
                  {mdDown ? <SubTitle>Identificação:</SubTitle> : null}
                  <InputControlled
                    controller={{ name: "cnpj", control, defaultValue: "" }}
                    size="small"
                    label="CNPJ"
                  />
                  <InputControlled
                    controller={{
                      name: "nomeFantasia",
                      control,
                      defaultValue: "",
                    }}
                    size="small"
                    label="Nome Fantasia"
                  />
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
              ) : activeStep === 1 ? (
                <Box>
                  {mdDown ? <SubTitle>Contato/Endereço:</SubTitle> : null}
                  <InputControlled
                    controller={{
                      name: "emal",
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
                </Box>
              ) : activeStep === 3 ? (
                <Box>
                  {mdDown ? <SubTitle>Contabilidade:</SubTitle> : null}
                  <InputControlled
                    controller={{
                      name: "nomeContabilidade",
                      control,
                      defaultValue: "",
                    }}
                    size="small"
                    label="Nome"
                  />
                </Box>
              ) : activeStep === 4 ? (
                <Box>
                  {mdDown ? <SubTitle>Tokens:</SubTitle> : null}
                  <InputControlled
                    controller={{
                      name: "token",
                      control,
                      defaultValue: "",
                    }}
                    size="small"
                    label="Token"
                  />
                </Box>
              ) : activeStep === 5 ? (
                <Box>
                  {mdDown ? <SubTitle>Documentos Fiscais:</SubTitle> : null}
                  <InputControlled
                    controller={{
                      name: "cnpjContabilidade",
                      control,
                      defaultValue: "",
                    }}
                    size="small"
                    label="CNPJ"
                  />
                </Box>
              ) : (
                <Box>
                  <Typography>fim</Typography>
                </Box>
              )}
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                variant="contained"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Voltar
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              {activeStep === 6 ? (
                <Button type="submit" variant="contained">
                  Salvar
                </Button>
              ) : (
                <Button variant="contained" onClick={handleNext}>
                  Próximo
                </Button>
              )}
            </Box>
          </>
        </Box>
      </LayoutFormBase>
    </>
  );
}
