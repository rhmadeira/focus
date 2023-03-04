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
import { useNavigate } from "react-router-dom";
import { ICollaborator } from "../../../../shared/services/schemas/collaboratorsSchema";
import Rows from "./Rows";

interface ItableCollaborators {
  collaboratorData: ICollaborator[];
  isLoading: boolean;
}

export default function TableCollaborators({
  collaboratorData,
  isLoading,
}: ItableCollaborators) {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(8);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  function handleDelete(id: string) {
    return;
  }

  return (
    <Box flex={1} overflow="auto" marginTop={smDown ? "5px" : "10px"}>
      <TableContainer component={Paper} variant="outlined">
        <Table size="small">
          {collaboratorData.length !== 0 && (
            <TableHead>
              <TableRow>
                <TableCell>Usuário</TableCell>
                <TableCell>Nome Completo</TableCell>
                <TableCell align="right">Ações</TableCell>
              </TableRow>
            </TableHead>
          )}
          <TableBody>
            {isLoading ? (
              [...Array(8)].map((_, index) => (
                <TableRow key={index}>
                  {[...Array(3)].map((_, index) => (
                    <TableCell key={index}>
                      <Skeleton height="30px" />
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <>
                {collaboratorData
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    return (
                      <Rows
                        key={`${row.id}`}
                        dataRow={row}
                        isLoading={isLoading}
                      />
                    );
                  })}
              </>
            )}
          </TableBody>
        </Table>
        {collaboratorData.length !== 0 && (
          <TablePagination
            rowsPerPageOptions={[8, 20, 30]}
            component="div"
            count={collaboratorData.length || 0}
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
