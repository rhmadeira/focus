import { Button } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";
import TitleBasic from "../../components/shared/TitleBasic";
import { ContainerAll, ContainerNav } from "./styles";
import SubNavRegistration from "./components/SubNavRegistration";
import { ContainerPages } from "../../shared/themes/global";

export default function Registration() {
  return (
    <div>
      <ContainerAll>
        <TitleBasic>Cadastro</TitleBasic>
        <ContainerPages>
          <ContainerNav>
            <SubNavRegistration />
          </ContainerNav>
          <Outlet />
        </ContainerPages>
      </ContainerAll>
    </div>
  );
}
