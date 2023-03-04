import {
  Icon,
  IconButton,
  Menu,
  MenuItem,
  TableCell,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ICollaborator } from "../../../../../shared/services/schemas/collaboratorsSchema";
import { ICompany } from "../../../../../shared/services/schemas/companySchema";
import { cnpjMask, formatDateBr } from "../../../../../shared/utils/formaters";

interface ITableCompanyProps {
  dataRow: ICompany;
  isLoading: boolean;
}
export default function Rows({ dataRow }: ITableCompanyProps) {
  const navigate = useNavigate();
  const [isMenuPerfil, setIsMenuPerfil] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setIsMenuPerfil(event.currentTarget);
  };

  function handleClickedProfile() {
    setIsMenuPerfil(null);
    navigate("/perfil");
  }
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
      <TableCell>
        <IconButton
          size="small"
          aria-label="SubMenu"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
        >
          <Icon fontSize="medium">more_vert</Icon>
        </IconButton>
      </TableCell>
      <Menu
        id="menu-appbar"
        anchorEl={isMenuPerfil}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(isMenuPerfil)}
        onClose={() => setIsMenuPerfil(null)}
      >
        <MenuItem onClick={handleClickedProfile}>Editar</MenuItem>
        <MenuItem onClick={handleClickedProfile}>Deletar</MenuItem>
        <MenuItem onClick={handleClickedProfile}>Enviar certificado</MenuItem>
        <MenuItem onClick={handleClickedProfile}>Baixar arquivos</MenuItem>
      </Menu>
    </TableRow>
  );
}
