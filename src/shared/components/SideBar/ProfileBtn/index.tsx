import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { ToggleThemeSwitch } from "./ToggleThemeSwitch";
import { useAppThemeContext } from "../../../context/ThemeContext";
import Icon from "@mui/material/Icon";

export function ProfileBtn() {
  const [isMenuPerfil, setIsMenuPerfil] = React.useState<null | HTMLElement>(
    null
  );
  const { toggleTheme } = useAppThemeContext();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setIsMenuPerfil(event.currentTarget);
  };
  const handleClose = () => {
    setIsMenuPerfil(null);
  };
  const handleToggleTheme = () => {
    toggleTheme();
  };

  return (
    <Box>
      <ToggleThemeSwitch onChange={handleToggleTheme} />
      <IconButton
        size="large"
        aria-label="account of current user"
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
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
      </Menu>
    </Box>
  );
}
