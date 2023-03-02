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
  TablePagination,
  TableRow,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import { IReference } from "../../../../shared/services/schemas/referenceSchema";
import { formatDate } from "../../../../shared/utils/formaters";

interface ITableReferenceProps {
  referenceData: IReference[];
}

export default function TableReference(referenceData: ITableReferenceProps) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  console.log("render");
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Box flex={1} overflow="auto" marginTop={smDown ? "5px" : "10px"}>
      <TableContainer component={Paper} variant="outlined">
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Emissão</TableCell>
              <TableCell>Empresa</TableCell>
              <TableCell>Número</TableCell>
              <TableCell>Referencia</TableCell>
              <TableCell>Valor</TableCell>
              <TableCell>Nome do Destinatario</TableCell>
              <TableCell>Status</TableCell>
              <TableCell width={150}>Detalhes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {referenceData.referenceData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow hover key={`${row.id} ${index}`}>
                    <TableCell>
                      {row.data_emissao && formatDate(row.data_emissao)}
                    </TableCell>
                    <TableCell>{row.nome_emitente}</TableCell>
                    <TableCell>{row.numero}</TableCell>
                    <TableCell>{row.ref}</TableCell>
                    <TableCell>
                      <Typography
                        color="var(--blue500)"
                        fontWeight="bold"
                        fontSize="1.05rem"
                      >
                        R$ {row.valor_total}
                      </Typography>
                    </TableCell>
                    <TableCell>{row.nome_destinatario}</TableCell>
                    <TableCell>{row.status}</TableCell>

                    <TableCell>
                      <Box display="flex" gap={1} alignItems="center">
                        <Typography marginRight="5px">Ver mais</Typography>
                        <IconButton size="small">
                          <Icon fontSize="small">visibility</Icon>
                        </IconButton>
                      </Box>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 15, 30]}
          component="div"
          count={referenceData.referenceData.length || 0}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </Box>
  );
}
