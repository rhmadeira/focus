import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Icon from "@mui/material/Icon";
import { useNavigate } from "react-router-dom";

export function ProfileBtn() {
  const navigate = useNavigate();
  const [isMenuPerfil, setIsMenuPerfil] = React.useState<null | HTMLElement>(
    null
  );

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setIsMenuPerfil(event.currentTarget);
  };

  function handleClickedProfile() {
    setIsMenuPerfil(null);
    navigate("/perfil");
  }

  return (
    <Box display="flex" gap={1}>
      <IconButton
        size="small"
        aria-label="Conta do usuário atual"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <Icon fontSize="medium">account_circle</Icon>
      </IconButton>
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
        <MenuItem onClick={handleClickedProfile}>Perfil do Usuário</MenuItem>
        <MenuItem onClick={handleClickedProfile}>Configurações</MenuItem>
      </Menu>
    </Box>
  );
}
