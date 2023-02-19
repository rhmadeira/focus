import { Box, Button, ButtonGroup } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";

import { LayoutBasePage } from "../../shared/layouts/LayoutBasePage";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Theme } from "@mui/material/styles";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import DomainAddIcon from "@mui/icons-material/DomainAdd";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";

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
            endIcon={<ManageSearchIcon />}
            component={NavLink}
            to="buscar"
          >
            Buscar
          </Button>
          <Button
            endIcon={<PersonAddAlt1Icon />}
            component={NavLink}
            to="colaborador"
          >
            Colaborador
          </Button>
          <Button endIcon={<DomainAddIcon />} component={NavLink} to="empresa">
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
