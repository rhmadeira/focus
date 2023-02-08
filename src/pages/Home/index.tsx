import { Box, useTheme } from "@mui/material";
import { LayoutBasePage } from "../../shared/layouts/LayoutBasePage";

export default function Home() {
  const theme = useTheme();
  return (
    <LayoutBasePage title="Home">
      <Box flex={1} overflow="auto">
        Home
      </Box>
    </LayoutBasePage>
  );
}
