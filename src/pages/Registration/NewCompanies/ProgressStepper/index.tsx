import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Divider, Theme, useMediaQuery } from "@mui/material";
import LayoutFormBase from "../../../../shared/layouts/LayoutFormBase";
import { useForm } from "react-hook-form";
import SubTitle from "../../../../shared/components/SubTitle";
import FiscalDocuments from "./form/FiscalDocuments";
import { Identification } from "./form/Identification";
import { ContactAddress } from "./form/ContactAddress";
import { Responsible } from "./form/Responsible";
import { GeneralContability } from "./form/GeneralContability";
import { UserTokens } from "./form/UserTokens";
import * as Zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schemaNewCompany = Zod.object({
  pessoa: Zod.number(),
  nome: Zod.string().optional(),
  nomeFantasia: Zod.string().optional(),
  cnpj: Zod.string().optional(),
  cpf: Zod.string().optional(),
  inscricaoEstadual: Zod.string().optional(),
  inscricaoMunicipal: Zod.string().optional(),
  regime: Zod.number().optional(),
  email: Zod.string().optional(),
  telefone: Zod.string().optional(),
  cep: Zod.string().optional(),
  logradouro: Zod.string().optional(),
  numero: Zod.string().optional(),
  complemento: Zod.string().optional(),
  bairro: Zod.string().optional(),
  cidade: Zod.string().optional(),
  estado: Zod.string().optional(),
  nomeResponsavel: Zod.string().optional(),
  contabilidade: Zod.string().optional(),
  tokenHom: Zod.string().optional(),
  tokenProd: Zod.string().optional(),
});

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
        <Box width="100%" height="100%">
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
              {activeStep === 0 ? (
                <Identification control={control} chekedPerson={chekedPerson} />
              ) : activeStep === 1 ? (
                <ContactAddress control={control} />
              ) : activeStep === 2 ? (
                <Responsible control={control} />
              ) : activeStep === 3 ? (
                <GeneralContability control={control} />
              ) : activeStep === 4 ? (
                <UserTokens control={control} />
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
                  <Typography variant="h6">
                    Antes de salvar, verifique se os dados estão corretos.
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
                <Button
                  type="button"
                  size="small"
                  variant="contained"
                  onClick={handleNext}
                >
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
