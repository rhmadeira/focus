import { Outlet } from "react-router-dom";
import TitleBasic from "../../components/shared/TitleBasic";

export default function Registration() {
  return (
    <div>
      <TitleBasic>Cadastro</TitleBasic>
      <Outlet />
    </div>
  );
}
