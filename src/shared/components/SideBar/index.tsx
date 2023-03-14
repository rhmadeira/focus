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
import { ProfileBtn } from "./components/ProfileBtn";
import { ToggleThemeSwitch } from "./components/ToggleThemeSwitch";
import { OptionSideBar } from "./components/OptionSideBar";
import { useThemeApp } from "../../services/hooks/useThemeApp";

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const toggleThemeApp = useThemeApp((state) => state.toggleThemeApp);
  const isDarkTheme = useThemeApp((state) => state.isDarkTheme);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  //event close drawer when click outside
  const handleDrawerCloseOutside = (event: React.MouseEvent<HTMLElement>) => {
    if (event.target !== event.currentTarget || open === true) {
      setOpen(false);
    }
  };

  return (
    <Box
      // display="flex"
      // width="100vw"
      height="auto" //era 100% troquei para auto verificar onde quebra
      bgcolor={theme.palette.background.default}
      paddingTop={8}
      paddingLeft={smDown ? 7 : 8}
      paddingBottom={1}
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
          <Box display="flex" alignItems="center" marginLeft="auto">
            <ToggleThemeSwitch
              onChange={() => toggleThemeApp()}
              isDarkTheme={isDarkTheme}
            />
            <ProfileBtn />
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
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
              icon="developer_board"
              open={open}
              label="Referência"
              to="/referencia"
              setOpen={setOpen}
            />
            <OptionSideBar
              icon="groups"
              open={open}
              label="Colaborador"
              to="/colaborador"
              setOpen={setOpen}
            />
            <OptionSideBar
              icon="domain"
              open={open}
              label="Empresa"
              to="/empresa"
              setOpen={setOpen}
            />
            {/* <OptionSideBar
              icon="paid"
              open={open}
              label="Titulos"
              to="/titulos"
            /> */}
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" display="" onClick={handleDrawerCloseOutside}>
        <Outlet />
      </Box>
    </Box>
  );
}
