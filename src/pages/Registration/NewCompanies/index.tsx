import { Box, Theme, useMediaQuery } from "@mui/material";
import { useForm } from "react-hook-form";
import LayoutFormBase from "../../../shared/layouts/LayoutFormBase";
import { zodResolver } from "@hookform/resolvers/zod";
import ProgressStepper from "./ProgressStepper";

export function NewCompanies() {
  const { handleSubmit, control } = useForm({});
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  function handleNewCompanyMobile(data: any) {
    console.log(data);
  }
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={1}
      marginTop={smDown ? "5px" : "10px"}
      flex="1"
      alignItems="center"
    >
      <ProgressStepper />
    </Box>
  );
}
