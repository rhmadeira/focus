import { Box, Button } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";
import TitleBasic from "../../components/shared/TitleBasic";
import { ContainerAll, ContainerNav } from "./styles";
import SubNavRegistration from "./components/SubNavRegistration";
import { ContainerPages } from "../../shared/themes/global";
import { LayoutBasePage } from "../../shared/layouts/LayoutBasePage";

export default function Registration() {
  return (
    <LayoutBasePage title="Cadastro">
      <Box flex={1} overflow="auto">
        <Outlet />
      </Box>
    </LayoutBasePage>
  );
}
