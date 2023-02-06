import { Box } from "@mui/material";
import { LayoutBasePage } from "../../shared/layouts/LayoutBasePage";

export default function Home() {
  return (
    <LayoutBasePage title="Home">
      <Box flex={1} overflow="auto">
        Home
      </Box>
    </LayoutBasePage>
  );
}
