import { Box, Button, ButtonGroup, Icon } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";

import { LayoutBasePage } from "../../shared/layouts/LayoutBasePage";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Theme } from "@mui/material/styles";

export default function Registration() {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  return (
    <LayoutBasePage title="Cadastro">
      <Box display="flex" justifyContent={smDown ? "center" : "flex-start"}>
        <ButtonGroup
          orientation={smDown ? "vertical" : "horizontal"}
          variant="text"
          aria-label="text button group"
        >
          <Button
            endIcon={<Icon>person</Icon>}
            component={NavLink}
            to="colaborador"
          >
            Colaborador
          </Button>
          <Button
            endIcon={<Icon>domain</Icon>}
            component={NavLink}
            variant="text"
            to="empresa"
          >
            Empresa
          </Button>
        </ButtonGroup>
      </Box>
      <Box flex={1} overflow="auto">
        <Outlet />
      </Box>
    </LayoutBasePage>
  );
}
