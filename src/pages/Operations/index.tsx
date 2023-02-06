import { NavLink, Outlet } from "react-router-dom";
import { LayoutBasePage } from "../../shared/layouts/LayoutBasePage";
import { Box, Button, ButtonGroup } from "@mui/material";
import Icon from "@mui/material/Icon";

export default function Operations() {
  return (
    <LayoutBasePage title="Operações">
      <Box flex={1} overflow="auto">
        <Outlet />
      </Box>
    </LayoutBasePage>
  );
}
