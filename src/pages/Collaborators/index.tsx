import {
  Box,
  Button,
  Divider,
  Icon,
  Theme,
  useMediaQuery,
} from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import * as zod from "zod";

import InputControlled from "../../shared/components/form/InputControlled";
import { LayoutBasePage } from "../../shared/layouts/LayoutBasePage";
import LayoutFormBase from "../../shared/layouts/LayoutFormBase";
import SubTitle from "../../shared/components/SubTitle";
import TableCollaborators from "./components/TableCollaborators";
import { ICollaborator } from "../../shared/services/schemas/collaboratorsSchema";
import { getAllCollaborators } from "../../shared/services/collaborators";

const schemaSearch = zod.object({
  nome: zod.string(),
});

export type SearchFormData = zod.infer<typeof schemaSearch>;

export default function Collaborators() {
  const [collaboratorData, setCollaboratorData] = useState<ICollaborator[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const { control, handleSubmit, watch } = useForm<SearchFormData>({
    resolver: zodResolver(schemaSearch),
  });

  console.log("collaboratorData", collaboratorData);

  async function handleSearch(input: SearchFormData) {
    try {
      setIsLoading(true);
      const response = await getAllCollaborators();
      if (response) setCollaboratorData(response);
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
    <LayoutBasePage title="Colaborador">
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
            <SubTitle>Buscar por Colaborador:</SubTitle>
            <Button
              type="button"
              startIcon={<Icon>add</Icon>}
              variant={smDown ? "text" : "outlined"}
              onClick={() => navigate("/colaborador/novo")}
            >
              Novo Colaborador
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
                label="Email"
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
                {watch("nome") ? "Buscar" : "Buscar Todos"}
              </Button>
            </Box>
          </Box>
        </LayoutFormBase>
        <Box width="100%">
          <TableCollaborators
            isLoading={isLoading}
            collaboratorData={collaboratorData}
          />
        </Box>
      </Box>
    </LayoutBasePage>
  );
}
