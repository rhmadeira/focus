import { Outlet } from "react-router-dom";
import TitleBasic from "../../components/shared/TitleBasic";
import { ContainerAll, ContainerNav } from "./styles";
import SubNavOperation from "./components/SubNavOperation";
import { ContainerPages } from "../../shared/themes/global";

export default function Operacoes() {
  return (
    <ContainerAll>
      <TitleBasic>Operações</TitleBasic>
      <ContainerPages>
        <ContainerNav>
          <SubNavOperation />
        </ContainerNav>
        <Outlet />
      </ContainerPages>
    </ContainerAll>
  );
}
