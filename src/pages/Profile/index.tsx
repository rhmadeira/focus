import { Box } from "@mui/material";
import { LayoutBasePage } from "../../shared/layouts/LayoutBasePage";

export function Profile() {
  return (
    <LayoutBasePage title="Perfil">
      <Box flex={1} overflow="auto"></Box>
    </LayoutBasePage>
  );
}
