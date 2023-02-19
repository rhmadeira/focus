import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import { Link, Outlet } from "react-router-dom";
import { AppBar, Drawer, DrawerHeader } from "./styles";
import Logo from "../../../assets/logo.svg";
import { Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery/useMediaQuery";
import { useAppThemeContext } from "../../context";
import { ProfileBtn } from "./components/ProfileBtn";
import { ToggleThemeSwitch } from "./components/ToggleThemeSwitch";
import { OptionSideBar } from "./components/OptionSideBar";

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const { toggleTheme } = useAppThemeContext();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: "100vw",
        height: "100%",
      }}
      bgcolor={theme.palette.background.default}
    >
      <AppBar open={open}>
        <Toolbar>
          <IconButton
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 4,
              color: "white",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/">
            <img src={Logo} alt="logo" width={120} />
          </Link>
          <div style={{ marginLeft: "auto" }}>
            <ProfileBtn />
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={open}
        // style={{ backgroundColor: "transparent" }}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} sx={{ color: "white" }}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>

        <List component="nav">
          <ListItem
            sx={{
              display: "block",
              border: "none",
              padding: 0,
            }}
          >
            <OptionSideBar
              icon="home"
              open={open}
              label="Página Inicial"
              to="/home"
            />
            <OptionSideBar
              icon="developer_board"
              open={open}
              label="Operações"
              to="/operacao/referencia"
            />
            <OptionSideBar
              icon="manage_accounts"
              open={open}
              label="Cadastros"
              to="/cadastro/buscar"
            />
            <OptionSideBar
              icon="paid"
              open={open}
              label="Boletos"
              to="/boleto"
            />
          </ListItem>
        </List>
        <Box margin={"auto auto 10px auto"}>
          <ToggleThemeSwitch onChange={() => toggleTheme()} />
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          marginTop: "64px",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
