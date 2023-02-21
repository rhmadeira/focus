import {
  Box,
  Button,
  Divider,
  Icon,
  IconButton,
  LinearProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
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

const schemaSearch = zod.object({
  Query: zod.string().min(1).max(100),
});

export type SearchFormData = zod.infer<typeof schemaSearch>;

export default function Companies() {
  const [isLoading, setIsLoading] = useState(false);
  const [rows, setRows] = useState([
    {
      id: 1,
      name: "teste",
      email: "",
    },
  ]);
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm<SearchFormData>({
    resolver: zodResolver(schemaSearch),
  });
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  async function handleSearch(input: SearchFormData) {
    console.log(input);
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
          <SubTitle>Buscar por Empresa:</SubTitle>
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
                name: "Query",
                defaultValue: "",
              }}
              size="small"
              label="Nome ou CPF"
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
        <TableContainer
          component={Paper}
          variant="outlined"
          sx={{ m: 1, width: "100%" }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nome</TableCell>
                <TableCell>Email</TableCell>
                <TableCell width={100}>Ações</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows?.map((row) => {
                return (
                  <TableRow key={row.id}>
                    <TableCell>aguardando schema</TableCell>
                    <TableCell>aguardando schema</TableCell>
                    <TableCell>
                      <IconButton
                        size="small"
                        onClick={() => handleDelete(row.id)}
                      >
                        <Icon fontSize="small">delete</Icon>
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() =>
                          navigate(`/empresa/editarempresa/${row.id}`)
                        }
                      >
                        <Icon fontSize="small">edit</Icon>
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>

            <TableFooter>
              {isLoading && (
                <TableRow>
                  <TableCell colSpan={3}>
                    <LinearProgress variant="indeterminate" />
                  </TableCell>
                </TableRow>
              )}
            </TableFooter>
          </Table>
        </TableContainer>
      </Box>
    </LayoutBasePage>
  );
}