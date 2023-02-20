import { Box, Theme, useMediaQuery } from "@mui/material";
import ProgressStepper from "./ProgressStepper";

export function NewCompanies() {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

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
