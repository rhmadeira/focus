import {
  Icon,
  IconButton,
  TableCell,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import { ICollaborator } from "../../../../../shared/services/schemas/collaboratorsSchema";

interface ITableReferenceProps {
  dataRow: ICollaborator;
  isLoading: boolean;
}
export default function Rows({ dataRow }: ITableReferenceProps) {
  return (
    <TableRow key={`${dataRow.id}`} hover sx={{ cursor: "pointer" }}>
      <TableCell>
        <Typography color="var(--blue500)" fontWeight="bold">
          {dataRow.email}
        </Typography>
      </TableCell>
      <TableCell>{dataRow.full_name}</TableCell>
      <TableCell align="right">
        <Tooltip title="Editar">
          <IconButton size="small">
            <Icon fontSize="small">edit</Icon>
          </IconButton>
        </Tooltip>
        <Tooltip title="deletar">
          <IconButton size="small">
            <Icon fontSize="small">delete</Icon>
          </IconButton>
        </Tooltip>
      </TableCell>
    </TableRow>
  );
}
