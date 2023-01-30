import InputBasic from "../../../components/shared/InputBasic";
import { ContainerForm } from "./styles";

export default function SearchRef() {
  return (
    <ContainerForm>
      <h1>Busca de Referência:</h1>
      <form>
        <InputBasic label="teste" />
        <InputBasic label="teste" />
        <InputBasic label="teste" />
      </form>
    </ContainerForm>
  );
}
