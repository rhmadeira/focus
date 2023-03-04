import {
  Box,
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Theme,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import { IReference } from "../../../../shared/services/schemas/referenceSchema";
import Rows from "./Rows";

interface ITableReferenceProps {
  referenceData: IReference[];
  isLoading: boolean;
}

export default function TableReference({
  referenceData,
  isLoading,
}: ITableReferenceProps) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(8);
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
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
          {referenceData.length !== 0 && (
            <TableHead>
              <TableRow>
                <TableCell>Referencia</TableCell>
                <TableCell>Empresa</TableCell>
                <TableCell>Emissão</TableCell>
                <TableCell>Número</TableCell>
                <TableCell>Valor</TableCell>
                <TableCell>Nome do Destinatario</TableCell>
                <TableCell>Status</TableCell>
                <TableCell width={10} align="center"></TableCell>
              </TableRow>
            </TableHead>
          )}
          <TableBody>
            {isLoading ? (
              [...Array(6)].map((_, index) => (
                <TableRow key={index}>
                  {[...Array(8)].map((_, index) => (
                    <TableCell key={index}>
                      <Skeleton height="30px" />
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <>
                {referenceData
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    return <Rows key={`${row.id} ${row.ref}`} dataRow={row} />;
                  })}
              </>
            )}
          </TableBody>
        </Table>
        {referenceData.length !== 0 && (
          <TablePagination
            rowsPerPageOptions={[8, 20, 30]}
            component="div"
            count={referenceData.length || 0}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        )}
      </TableContainer>
    </Box>
  );
}
