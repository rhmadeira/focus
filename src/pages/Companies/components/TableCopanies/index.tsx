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
  Theme,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const rows = [
  {
    id: "1",
    competencia: "01/2021",
    vencimento: "10/01/2021",
    valor: "R$ 1.000,00",
    status: "Pendente",
    nf: "123456",
  },
  {
    id: "1",
    competencia: "01/2021",
    vencimento: "10/01/2021",
    valor: "R$ 1.000,00",
    status: "Pendente",
    nf: "123456",
  },
  {
    id: "1",
    competencia: "01/2021",
    vencimento: "10/01/2021",
    valor: "R$ 1.000,00",
    status: "Pendente",
    nf: "123456",
  },
  {
    id: "1",
    competencia: "01/2021",
    vencimento: "10/01/2021",
    valor: "R$ 1.000,00",
    status: "Pendente",
    nf: "123456",
  },
  {
    id: "1",
    competencia: "01/2021",
    vencimento: "10/01/2021",
    valor: "R$ 1.000,00",
    status: "Pendente",
    nf: "123456",
  },
  {
    id: "1",
    competencia: "01/2021",
    vencimento: "10/01/2021",
    valor: "R$ 1.000,00",
    status: "Pendente",
    nf: "123456",
  },
  {
    id: "1",
    competencia: "01/2021",
    vencimento: "10/01/2021",
    valor: "R$ 1.000,00",
    status: "Pendente",
    nf: "123456",
  },
  {
    id: "1",
    competencia: "01/2021",
    vencimento: "10/01/2021",
    valor: "R$ 1.000,00",
    status: "Pendente",
    nf: "123456",
  },
  {
    id: "1",
    competencia: "01/2021",
    vencimento: "10/01/2021",
    valor: "R$ 1.000,00",
    status: "Pendente",
    nf: "123456",
  },
  {
    id: "1",
    competencia: "01/2021",
    vencimento: "10/01/2021",
    valor: "R$ 1.000,00",
    status: "Pendente",
    nf: "123456",
  },
  {
    id: "1",
    competencia: "01/2021",
    vencimento: "10/01/2021",
    valor: "R$ 1.000,00",
    status: "Pendente",
    nf: "123456",
  },
  {
    id: "1",
    competencia: "01/2021",
    vencimento: "10/01/2021",
    valor: "R$ 1.000,00",
    status: "Pendente",
    nf: "123456",
  },
  {
    id: "1",
    competencia: "01/2021",
    vencimento: "10/01/2021",
    valor: "R$ 1.000,00",
    status: "Pendente",
    nf: "123456",
  },
  {
    id: "1",
    competencia: "01/2021",
    vencimento: "10/01/2021",
    valor: "R$ 1.000,00",
    status: "Pendente",
    nf: "123456",
  },
  {
    id: "1",
    competencia: "01/2021",
    vencimento: "10/01/2021",
    valor: "R$ 1.000,00",
    status: "Pendente",
    nf: "123456",
  },
];

export default function TableCompanies() {
  const navigate = useNavigate();
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const isLoading = false;

  function handleDelete(id: string) {
    return;
  }

  return (
    <Box flex={1} overflow="auto" marginTop={smDown ? "5px" : "10px"}>
      <TableContainer component={Paper} variant="outlined">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Data Emissão</TableCell>
              <TableCell>Empresa</TableCell>
              <TableCell>Número</TableCell>
              <TableCell>Refêrencia</TableCell>
              <TableCell>Valor Total</TableCell>
              <TableCell>Nome do Destinatario</TableCell>
              <TableCell>Status</TableCell>
              <TableCell width={100}>Detalhes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.map((row, index) => {
              return (
                <TableRow key={`${row.id} ${index}`}>
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
  );
}
