import {
  Box,
  Button,
  Divider,
  Icon,
  Theme,
  useMediaQuery,
} from "@mui/material";
import LayoutFormBase from "../../shared/layouts/LayoutFormBase";
import InputControlled from "../../shared/components/form/InputControlled";
import { LayoutBasePage } from "../../shared/layouts/LayoutBasePage";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import * as zod from "zod";

import SubTitle from "../../shared/components/SubTitle";
import { NewCompanyDataResponse } from "./schemas";
import TableCompanies from "./components/TableCopanies";
import { getAllCompanies } from "../../shared/services/company";
import { ICompany } from "../../shared/services/schemas/companySchema";

const schemaSearch = zod.object({
  nome: zod.string(),
});

export type SearchFormData = zod.infer<typeof schemaSearch>;

export default function Companies() {
  const [isLoading, setIsLoading] = useState(false);
  const [companiesData, setcompaniesData] = useState<ICompany[]>([]);
  const navigate = useNavigate();
  const { control, handleSubmit, watch } = useForm<SearchFormData>({
    resolver: zodResolver(schemaSearch),
  });
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  async function handleSearch(input: SearchFormData) {
    try {
      setIsLoading(true);
      const data = await getAllCompanies();
      if (data) setcompaniesData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }
  function handleDelete(id: number) {
    console.log(id);
  }
  return (
    <LayoutBasePage title="Empresa">
      <Box
        display="flex"
        flexDirection="column"
        flex="1"
        alignItems="center"
        gap={1}
        marginTop={smDown ? "5px" : "10px"}
      >
        <LayoutFormBase handleSearch={handleSubmit(handleSearch)}>
          <Box display="flex" justifyContent="space-between">
            <SubTitle>Buscar por Empresa:</SubTitle>
            <Button
              type="button"
              startIcon={<Icon>add</Icon>}
              variant={smDown ? "text" : "outlined"}
              onClick={() => navigate("/empresa/nova")}
            >
              Nova Empresa
            </Button>
          </Box>
          <Divider />
          <Box
            display="flex"
            flexWrap={smDown ? "wrap" : "nowrap"}
            gap={1}
            width="100%"
          >
            <Box
              display="flex"
              flex={1}
              gap={smDown ? 1 : 2}
              flexWrap={{ xs: "wrap", sm: "nowrap" }}
              minWidth="200px"
            >
              <InputControlled
                controller={{
                  control,
                  name: "nome",
                  defaultValue: "",
                }}
                size="small"
                label="Nome ou CPF"
                variant="outlined"
              />
            </Box>
            <Box display="flex">
              <Button
                startIcon={<Icon>search</Icon>}
                type="submit"
                variant="contained"
                size="small"
              >
                {watch("nome") ? "Buscar" : "Buscar todos"}
              </Button>
            </Box>
          </Box>
        </LayoutFormBase>
        <Box width="100%">
          {
            <TableCompanies
              isLoading={isLoading}
              companiesData={companiesData}
            />
          }
        </Box>
      </Box>
    </LayoutBasePage>
  );
}
