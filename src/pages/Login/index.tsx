import ButtonBasic from "../../components/shared/ButtonBasic";
import InputBasic from "../../components/shared/InputBasic";
import {
  ContainerAll,
  Footer,
  TitleLogin,
  ContentImg,
  ContainerForm,
} from "./styles";
import Logo from "../../assets/logoblue.svg";

export default function Login() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <ContainerAll>
      <ContentImg />
      <ContainerForm>
        <form onSubmit={handleSubmit}>
          <img src={Logo} alt="logo" width={200} />
          <TitleLogin>Login</TitleLogin>
          <InputBasic label="E-mail:" />
          <InputBasic label="Senha:" />
          <div>
            <ButtonBasic>Entrar</ButtonBasic>
          </div>
        </form>
        <Footer>
          Se você ainda não está cadastrado solicite ao administrador de seu
          sistema que crie seu usuário.
        </Footer>
      </ContainerForm>
    </ContainerAll>
  );
}
