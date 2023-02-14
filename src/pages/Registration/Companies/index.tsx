import { Box, Theme, useMediaQuery } from "@mui/material";
import { useForm } from "react-hook-form";
import LayoutFormBase from "../../../shared/layouts/LayoutFormBase";
import { zodResolver } from "@hookform/resolvers/zod";
import ProgressStepper from "./ProgressStepper";

export default function Companies() {
  const { handleSubmit, control } = useForm({});
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  function handleNewCompanyMobile(data: any) {
    console.log(data);
  }
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={2}
      marginTop={smDown ? "10px" : "30px"}
      flex="1"
      alignItems="center"
    >
      <ProgressStepper />
    </Box>
  );
}
