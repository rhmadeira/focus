import {
  Box,
  Icon,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Outlet } from "react-router-dom";

interface ILayoutBasePageProps {
  children?: React.ReactNode;
  title: string;
}

export function LayoutBasePage({ children, title }: ILayoutBasePageProps) {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box height="100%" display="flex" flexDirection="column" gap={2}>
      <Box
        height={smDown ? theme.spacing(6) : theme.spacing(8)}
        display="flex"
        alignItems="center"
        bgcolor={theme.palette.background.paper}
      >
        <Typography
          variant={smDown ? "h6" : mdDown ? "h5" : "h4"}
          whiteSpace="nowrap"
          component="h1"
          padding="16px 20px"
          overflow="hidden"
          textOverflow="ellipsis"
        >
          {title}
        </Typography>
      </Box>
      <Box padding={"0 20px"} display="flex" flexDirection="column" gap={2}>
        <Box>{children}</Box>
      </Box>
    </Box>
  );
}
