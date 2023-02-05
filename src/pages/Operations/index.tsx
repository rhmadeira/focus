import { Outlet } from "react-router-dom";
import { LayoutBasePage } from "../../shared/layouts/LayoutBasePage";
import { Box } from "@mui/material";
import NavOperations from "./components/NavOperations";

export default function Operations() {
  return (
    <LayoutBasePage title="Operações">
      <NavOperations />
      <Box flex={1} overflow="auto">
        <Outlet />
      </Box>
    </LayoutBasePage>
  );
}
