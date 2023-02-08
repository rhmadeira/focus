import {
  Box,
  Icon,
  IconButton,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Outlet } from "react-router-dom";
import { Title } from "./styles";

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
        component={Paper}
        elevation={0}

        // bgcolor={theme.palette.background.paper}
      >
        <Title
          variant={smDown ? "h6" : mdDown ? "h5" : "h4"}
          whiteSpace="nowrap"
          padding="16px 20px"
          overflow="hidden"
          textOverflow="ellipsis"
        >
          {title}
        </Title>
      </Box>
      <Box
        // height="100%"
        padding={"0 20px"}
        display="flex"
        flexDirection="column"
        gap={2}
        flex={1}
      >
        {children}
      </Box>
    </Box>
  );
}
