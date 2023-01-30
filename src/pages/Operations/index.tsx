import { Outlet } from "react-router-dom";
import CardBasic from "../../components/shared/CardBasic";
import TitleBasic from "../../components/shared/TitleBasic";
import { ContainerPages } from "../../styles/themes/global";
import { ContainerAll, ContainerCards } from "./styles";

export default function Operacoes() {
  return (
    <ContainerAll>
      <TitleBasic>Operações</TitleBasic>
      <ContainerPages>
        <ContainerCards>
          <CardBasic alt="Buscade Referencia" img="bggray500">
            Busca de Referência
          </CardBasic>
          <CardBasic alt="Buscade Referencia" img="bgtriangulo">
            Opção 2
          </CardBasic>
          <CardBasic alt="Buscade Referencia" img="bgblue500">
            Opção 3
          </CardBasic>
        </ContainerCards>
        <Outlet />
      </ContainerPages>
    </ContainerAll>
  );
}
