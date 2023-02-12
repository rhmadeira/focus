import { Box } from "@mui/material";
import { useForm } from "react-hook-form";
import LayoutFormBase from "../../../shared/layouts/LayoutFormBase";
import { zodResolver } from "@hookform/resolvers/zod";
import ProgressStepper from "./ProgressStepper";

export default function Companies() {
  const { handleSubmit, control } = useForm({});
  function handleNewCompanyMobile(data: any) {
    console.log(data);
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
      <ProgressStepper />
    </Box>
  );
}
