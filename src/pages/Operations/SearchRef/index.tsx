import Button from "@mui/material/Button";
import InputBasic from "../../../components/shared/Inputs/InputBasic";
import TitleSub from "../../../components/shared/TitleSub";
import {
  Container,
  ContainerButton,
  ContainerForm,
  ContainerInput,
  ContainerPeriod,
  SearchForm,
} from "./styles";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { useForm } from "react-hook-form";

const schemaSearchRef = zod.object({
  dateStart: zod.string().optional(),
  dateEnd: zod.string().optional(),
  company: zod.string().optional(),
  reference: zod.string().optional(),
  number: zod.string().optional(),
  nRPS: zod.string().optional(),
});

export type SearchRefFormData = zod.infer<typeof schemaSearchRef>;

export default function SearchRef() {
  const { control, handleSubmit } = useForm<SearchRefFormData>({
    resolver: zodResolver(schemaSearchRef),
  });

  function handleSearchRef(data: SearchRefFormData) {
    console.log(data);
  }
  return (
    <ContainerForm>
      <TitleSub>Busca de Referência:</TitleSub>
      <SearchForm onSubmit={handleSubmit(handleSearchRef)}>
        <ContainerPeriod>
          <p>Period</p>
          <span>até</span>
          <p>Period</p>
        </ContainerPeriod>
        <Container>
          <ContainerInput>
            <InputBasic
              controller={{
                control,
                name: "company",
                defaultValue: "",
              }}
              label="Empresa"
              size="small"
              type="text"
            />
            <InputBasic
              controller={{
                control,
                name: "reference",
                defaultValue: "",
              }}
              label="Referência"
              size="small"
            />
          </ContainerInput>
          <ContainerInput>
            <InputBasic
              controller={{
                control,
                name: "number",
                defaultValue: "",
              }}
              label="Número"
              size="small"
            />

            <InputBasic
              controller={{
                control,
                name: "nRPS",
                defaultValue: "",
              }}
              label="N.RPS"
              size="small"
            />
          </ContainerInput>
        </Container>
        <ContainerButton>
          <Button type="submit" variant="contained">
            Buscar
          </Button>
        </ContainerButton>
      </SearchForm>
    </ContainerForm>
  );
}
