import { Box } from "@mui/material";
import TitleBasic from "../../components/shared/TitleBasic";
import { LayoutBasePage } from "../../shared/layouts/LayoutBasePage";

export default function Ticket() {
  return (
    <LayoutBasePage title="Boletos">
      <Box flex={1} overflow="auto"></Box>
    </LayoutBasePage>
  );
}
