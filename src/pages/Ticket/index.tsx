import {
  Box,
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
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LayoutBasePage } from "../../shared/layouts/LayoutBasePage";

export default function Ticket() {
  const [isLoading, setIsLoading] = useState(false);
  const [rows, setRows] = useState([
    {
      id: 1,
      competencia: "2021-01",
      vencimento: "2021-01-10",
      valor: 100,
      status: "PAGO",
      nf: "123",
    },
  ]);
  const navigate = useNavigate();
  function handleDelete(id: number) {
    console.log(id);
  }
  return (
    <LayoutBasePage title="Boletos">
      <Box flex={1} overflow="auto">
        <TableContainer component={Paper} variant="outlined">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Competência</TableCell>
                <TableCell>Vencimento</TableCell>
                <TableCell>Valor</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>NF</TableCell>
                <TableCell width={100}>Ações</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows?.map((row) => {
                return (
                  <TableRow key={row.id}>
                    <TableCell>{row.competencia}</TableCell>
                    <TableCell>{row.vencimento}</TableCell>
                    <TableCell>{row.valor}</TableCell>
                    <TableCell>{row.status}</TableCell>
                    <TableCell>{row.nf}</TableCell>
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
                          navigate(`/colaborador/editarcolaborador/${row.id}`)
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
