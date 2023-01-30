import { Button } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";
import TitleBasic from "../../components/shared/TitleBasic";
import { ContainerPages } from "../../styles/themes/global";
import { ContainerAll, ContainerNav } from "./styles";
import DomainAddIcon from "@mui/icons-material/DomainAdd";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";

export default function Registration() {
  return (
    <div>
      <ContainerAll>
        <TitleBasic>Cadastro</TitleBasic>
        <ContainerPages>
          <ContainerNav>
            <NavLink to="colaborador">
              <Button
                sx={{
                  width: 200,
                  display: "flex",
                  gap: 2,
                  alignItems: "center",
                  justifyContent: "center",
                }}
                variant="outlined"
              >
                <span>Colaborador</span> <PersonAddAlt1Icon />
              </Button>
            </NavLink>
            <NavLink to="empresa">
              <Button
                sx={{
                  width: 200,
                  display: "flex",
                  gap: 2,
                  alignItems: "center",
                  justifyContent: "center",
                }}
                variant="outlined"
              >
                <span>Empresa</span> <DomainAddIcon />
              </Button>
            </NavLink>
          </ContainerNav>
          <Outlet />
        </ContainerPages>
      </ContainerAll>
    </div>
  );
}
