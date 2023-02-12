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

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={2}
      component="form"
      onSubmit={handleSearch}
      width={smDown ? "auto" : "90%"}
    >
      <Box
        component={Paper}
        display="flex"
        flexDirection="column"
        padding={4}
        gap={1}
      >
        {children}
      </Box>
    </Box>
  );
}
