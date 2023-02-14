import { Box, Paper, Theme, useMediaQuery } from "@mui/material";

interface ILayoutFormBaseProps {
  handleSearch: () => void;
  children: React.ReactNode;
}

export default function LayoutFormBase({
  handleSearch,
  children,
}: ILayoutFormBaseProps) {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
  const lgDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"));

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={2}
      component="form"
      onSubmit={handleSearch}
      width={smDown ? "100%" : mdDown ? "98%" : lgDown ? "98%" : "89%"}
    >
      <Box
        component={Paper}
        display="flex"
        flexDirection="column"
        padding={smDown ? 1 : mdDown ? 2 : lgDown ? 3 : 4}
        gap={smDown ? 1 : 2}
      >
        {children}
      </Box>
    </Box>
  );
}
