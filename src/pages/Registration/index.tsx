import { Button } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";
import TitleBasic from "../../components/shared/TitleBasic";
import { ContainerPages } from "../../styles/themes/global";
import { ContainerAll, ContainerNav } from "./styles";
import SubNav from "./components/SubNavRegistration";

export default function Registration() {
  return (
    <div>
      <ContainerAll>
        <TitleBasic>Cadastro</TitleBasic>
        <ContainerPages>
          <ContainerNav>
            <SubNav />
          </ContainerNav>
          <Outlet />
        </ContainerPages>
      </ContainerAll>
    </div>
  );
}
