import Button from "@mui/material/Button";
import DateInput from "../../../components/shared/Inputs/DateInput";
import InputBasic from "../../../components/shared/Inputs/InputBasic";
import TitleSub from "../../../components/shared/TitleSub";
import {
  ContainerButton,
  ContainerFields,
  ContainerForm,
  SearchForm,
} from "./styles";
import * as zod from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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
        <ContainerFields>
          <DateInput label="Período:" />
          <span>até</span>
          <DateInput label="Período:" />
        </ContainerFields>
        <ContainerFields>
          <Controller
            name="company"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <InputBasic
                label="Empresa teste"
                size="small"
                bg="secondary"
                type="text"
                // {...field}
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
          <InputBasic label="Empresa" size="small" bg="secondary" />
          <InputBasic label="Referência" size="small" bg="secondary" />
        </ContainerFields>
        <ContainerFields>
          <InputBasic label="Número" size="small" />
          <InputBasic label="N.RPS" size="small" />
        </ContainerFields>
        <ContainerButton>
          <Button type="submit" variant="contained">
            Buscar
          </Button>
        </ContainerButton>
      </SearchForm>
    </ContainerForm>
  );
}
