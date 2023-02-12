import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Theme, useMediaQuery } from "@mui/material";

const steps = [
  "Identificação",
  "Contato",
  "Endereço",
  "Responsável",
  "Contabilidade",
  "Tokens",
  "Documentos Fiscais",
];

export default function StepperForm() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleNext = () => {
    let newSkipped = skipped;
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleSaveNewCompany = () => {
    console.log("salvar");
  };

  return (
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
      <React.Fragment>
        <Box>
          <Typography sx={{ mt: 2, mb: 1 }}>
            {" "}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            error odit nemo beatae rem, amet nihil recusandae sapiente. Dolor
            fugiat architecto illo, ipsam deleniti quae temporibus odio
            accusamus asperiores quas. lorem Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quibusdam, vero sint tempora enim,
            recusandae cupiditate corporis fugit eius, ea doloremque labore
            similique? Aut, similique error impedit consequatur maiores
            veritatis nostrum. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Sint repudiandae, officia vero possimus obcaecati
            adipisci et nam quos, recusandae explicabo nobis perferendis
            assumenda nemo voluptatum neque eligendi sed quo praesentium?
            {activeStep + 1}
          </Typography>
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
            <Button variant="contained" onClick={handleSaveNewCompany}>
              Salvar
            </Button>
          ) : (
            <Button variant="contained" onClick={handleNext}>
              Próximo
            </Button>
          )}
        </Box>
      </React.Fragment>
    </Box>
  );
}
