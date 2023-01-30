import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { NavLink } from "react-router-dom";
import DomainAddIcon from "@mui/icons-material/DomainAdd";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";

export default function SubNavRegistration() {
  const [value, setValue] = React.useState(0);

  return (
    <div style={{ width: 300 }}>
      <BottomNavigation
        showLabels
        style={{ backgroundColor: "var(--gray100)" }}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Buscar"
          icon={<ManageSearchIcon />}
          component={NavLink}
          to="buscar"
        />
        <BottomNavigationAction
          label="Colaborador"
          icon={<PersonAddAlt1Icon />}
          component={NavLink}
          to="colaborador"
        />
        <BottomNavigationAction
          label="Empresa"
          icon={<DomainAddIcon />}
          component={NavLink}
          to="empresa"
        />
      </BottomNavigation>
    </div>
  );
}
