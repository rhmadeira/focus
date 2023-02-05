import {
  ContainerAll,
  Footer,
  TitleLogin,
  ContentImg,
  ContainerForm,
} from "./styles";
import Logo from "../../assets/logoblue.svg";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { AuthContext } from "../../shared/context/AuthContext";
import InputControlled from "../../shared/components/InputControlled";
import { Button } from "@mui/material";

const loginSchema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(6),
});

export type LoginData = zod.infer<typeof loginSchema>;

export default function Login() {
  const { handleSubmit, control } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });
  const { handleAuthLogin } = useContext(AuthContext);

  function handleLogin(data: LoginData) {
    handleAuthLogin(data);
  }

  return (
    <ContainerAll>
      <ContentImg />
      <ContainerForm>
        <form onSubmit={handleSubmit(handleLogin)}>
          <img src={Logo} alt="logo" width={200} />
          <TitleLogin>Login</TitleLogin>
          <InputControlled
            controller={{ control, name: "email", defaultValue: "" }}
            label="E-mail:"
            size="small"
            type="text"
          />
          <InputControlled
            controller={{ control, name: "password", defaultValue: "" }}
            label="Senha:"
            size="small"
            type="password"
          />
          <div>
            <Button variant="contained" type="submit">
              Entrar
            </Button>
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
