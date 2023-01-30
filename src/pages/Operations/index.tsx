import Button from "@mui/material/Button";
import { NavLink, Outlet } from "react-router-dom";
import TitleBasic from "../../components/shared/TitleBasic";
import { ContainerPages } from "../../styles/themes/global";
import { ContainerAll, ContainerNav } from "./styles";

export default function Operacoes() {
  return (
    <ContainerAll>
      <TitleBasic>Operações</TitleBasic>
      <ContainerPages>
        <ContainerNav>
          <NavLink to="referencia">
            <Button sx={{ width: 200 }} variant="contained">
              Buscar Referência
            </Button>
          </NavLink>
          <NavLink to="referencia">
            <Button sx={{ width: 200 }} variant="contained">
              Uma outra opção
            </Button>
          </NavLink>
        </ContainerNav>
        <Outlet />
      </ContainerPages>
    </ContainerAll>
  );
}
