import { Box } from "@mui/material";
import { useForm } from "react-hook-form";
import LayoutFormBase from "../../../shared/layouts/LayoutFormBase";
import StepperForm from "./StepperForm";
import TabForm from "./TabForm";

export default function Companies() {
  const { handleSubmit } = useForm();
  function handleNewCompany() {
    console.log("new company");
  }
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={2}
      marginTop="10px"
      flex="1"
      alignItems="center"
    >
      <LayoutFormBase handleSearch={handleSubmit(handleNewCompany)}>
        <StepperForm />
        {/* <TabForm /> */}
      </LayoutFormBase>
    </Box>
  );
}
