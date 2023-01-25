import { Box } from "@mui/material";
import ButtonBasic from "../../components/shared/ButtonBasic";
import InputBasic from "../../components/shared/InputBasic";
import TitleBasic from "../../components/shared/TitleBasic";
import {
  ContainerForm,
  ConteinerForm,
  ContentLogo,
  ContentForm,
  Footer,
} from "./styles";

export default function Login() {
  return (
    <ContainerForm>
      <ContentLogo />
      <ConteinerForm>
        <ContentForm component={"form"}>
          <TitleBasic>Login</TitleBasic>
          <InputBasic label="E-mail:" />
          <InputBasic label="Senha:" />
          <Box>
            <ButtonBasic>Entrar</ButtonBasic>
          </Box>
        </ContentForm>
        <Box>
          <Footer>
            Se você ainda não está cadastrado solicite ao administrador de seu
            sistema que crie seu usuário.
          </Footer>
        </Box>
      </ConteinerForm>
    </ContainerForm>
  );
}
