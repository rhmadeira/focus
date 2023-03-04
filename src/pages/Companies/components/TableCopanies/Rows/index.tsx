import {
  Icon,
  IconButton,
  TableCell,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import { ICollaborator } from "../../../../../shared/services/schemas/collaboratorsSchema";
import { ICompany } from "../../../../../shared/services/schemas/companySchema";
import { cnpjMask, formatDateBr } from "../../../../../shared/utils/formaters";

interface ITableCompanyProps {
  dataRow: ICompany;
  isLoading: boolean;
}
export default function Rows({ dataRow }: ITableCompanyProps) {
  return (
    <TableRow key={`${dataRow.id}`} hover sx={{ cursor: "pointer" }}>
      <TableCell>
        <Typography color="var(--blue500)" fontWeight="bold">
          {dataRow.nome}
        </Typography>
      </TableCell>
      <TableCell>{dataRow.nome_fantasia}</TableCell>
      <TableCell>{cnpjMask(dataRow.cnpj)}</TableCell>
      <TableCell>{formatDateBr(dataRow.data_ultima_emissao)}</TableCell>

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
