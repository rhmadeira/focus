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
  const { handleSubmit, control } = useForm();

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleNext = () => {
    let newSkipped = skipped;
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  function handleSaveNewCompanyMobile(data: any) {
    console.log(data);
  }
  function handleSaveNewCompanyWeb(data: any) {
    console.log(data);
  }

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
      {!smDown ? (
        <LayoutFormBase handleSearch={handleSubmit(handleSaveNewCompanyWeb)}>
          <Box sx={{ width: "100%" }}>
            <Stepper activeStep={activeStep}>
              {steps.map((label, index) => {
                const stepProps: { completed?: boolean } = {};
                const labelProps: {
                  optional?: React.ReactNode;
                } = {};
                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            <Divider sx={{ marginTop: "10px" }} />
            <>
              <Box marginTop={2}>
                {activeStep === 0 ? (
                  <Box>
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
                ) : null}
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
                {activeStep === steps.length - 1 ? (
                  <Button
                    type="submit"
                    variant="contained"
                    // onClick={handleSaveNewCompanyWeb}
                  >
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
      ) : (
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step component="form" key={step}>
              <StepLabel
                optional={
                  index === 2 ? (
                    <Typography variant="caption">Last step</Typography>
                  ) : null
                }
              >
                {step}
              </StepLabel>

              <StepContent>
                <Box>"nada"</Box>
                <Box sx={{ mb: 2 }}>
                  <div>
                    {activeStep === steps.length - 1 ? (
                      <Button type="submit" variant="contained">
                        Salvar
                      </Button>
                    ) : (
                      <Button variant="contained" onClick={handleNext}>
                        Próximo
                      </Button>
                    )}
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Voltar
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      )}
    </>
  );
}
