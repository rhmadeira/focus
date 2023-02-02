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
import { Controller, useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { type Dayjs } from "dayjs";

const schemaSearchRef = zod.object({
  dateStart: zod.instanceof(dayjs as unknown as typeof Dayjs).optional(),
  dateEnd: zod.string().optional(),
  company: zod.string().optional(),
  reference: zod.string().optional(),
  number: zod.string().optional(),
  nRPS: zod.string().optional(),
});

const schemaSearchApi = schemaSearchRef.transform((data) => {
  return {
    ...data,
    dateStart: data.dateStart?.format("YYYY-MM-DDTHH:mm:ssZ[Z]"),
  };
});

export type SearchRefFormData = zod.infer<typeof schemaSearchRef>;

export default function SearchRef() {
  const { control, handleSubmit } = useForm<SearchRefFormData>({
    resolver: zodResolver(schemaSearchRef),
  });

  function handleSearchRef(data: SearchRefFormData) {
    const apiData = schemaSearchApi.parse(data);
    console.log(apiData);
  }
  return (
    <ContainerForm>
      <TitleSub>Busca de Referência:</TitleSub>
      <SearchForm onSubmit={handleSubmit(handleSearchRef)}>
        <ContainerPeriod>
          <Controller
            control={control}
            name="dateStart"
            render={({ field }) => (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Basic example"
                  {...field}
                  onChange={(newValue) => {
                    field.onChange(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            )}
          />

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
