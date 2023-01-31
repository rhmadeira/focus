import { Outlet } from "react-router-dom";
import TitleBasic from "../../components/shared/TitleBasic";
import { ContainerPages } from "../../styles/themes/global";
import { ContainerAll, ContainerNav } from "./styles";
import SubNavOperation from "./components/SubNavOperation";

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
