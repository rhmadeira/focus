import InputBasic from "../../../components/shared/Inputs/InputBasic";
import TitleSub from "../../../components/shared/TitleSub";
import { ContainerAll } from "../styles";
import { ContainerSearch } from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { Button } from "@mui/material";

const schemaSearch = zod.object({
  Query: zod.string().min(1).max(100),
});

export type SearchFormData = zod.infer<typeof schemaSearch>;

export default function SearchRegistration() {
  const { control, handleSubmit } = useForm<SearchFormData>({
    resolver: zodResolver(schemaSearch),
  });

  function handleSearch(data: SearchFormData) {
    console.log(data);
  }
  return (
    <ContainerAll>
      <TitleSub>Buscar Cadastro:</TitleSub>
      <ContainerSearch onSubmit={handleSubmit(handleSearch)}>
        <InputBasic
          controller={{
            control,
            name: "Query",
            defaultValue: "",
          }}
          size="small"
          label="Nome ou CPF"
          variant="outlined"
        />
        <Button
          sx={{ height: "42px" }}
          type="submit"
          variant="contained"
          size="medium"
        >
          Buscar
        </Button>
      </ContainerSearch>
    </ContainerAll>
  );
}
