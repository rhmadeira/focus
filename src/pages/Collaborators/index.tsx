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
import { getCollaborators } from "../../shared/services/collaborators";

const schemaSearch = zod.object({
  nome: zod.string(),
});

export type SearchFormData = zod.infer<typeof schemaSearch>;

type Collaborator = {
  id: number;
  name: string;
  email: string;
};

export default function Collaborators() {
  const [rows, setRows] = useState<Collaborator[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm<SearchFormData>({
    resolver: zodResolver(schemaSearch),
  });
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
  const lgDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"));

  async function handleSearch(input: SearchFormData) {
    try {
      setIsLoading(true);
      const { data, status } = await getCollaborators(input.nome);
      setRows(data);
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
              Colaborador
            </Button>
          </Box>

          <Divider />
          <Box
            display="flex"
            flexWrap={smDown ? "wrap" : "nowrap"}
            gap={1}
            width="100%"
          >
            <InputControlled
              controller={{
                control,
                name: "nome",
                defaultValue: "",
              }}
              size="small"
              label="Nome ou email"
              variant="outlined"
            />
            <Button
              startIcon={<Icon>search</Icon>}
              type="submit"
              variant="contained"
              size="small"
            >
              Buscar
            </Button>
          </Box>
        </LayoutFormBase>
        <Box width="100%">
          <TableCollaborators />
        </Box>
      </Box>
    </LayoutBasePage>
  );
}
