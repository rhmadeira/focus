import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { NavLink } from "react-router-dom";
import DomainAddIcon from "@mui/icons-material/DomainAdd";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";

export default function NavOperations() {
  const [value, setValue] = React.useState(0);

  return (
    <div style={{ width: 200 }}>
      <BottomNavigation
        showLabels
        style={{ backgroundColor: "var(--gray100)" }}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Buscar Ref"
          icon={<ManageSearchIcon />}
          component={NavLink}
          to="referencia"
        />
        {/* <BottomNavigationAction
          label="Opção 2"
          icon={<PersonAddAlt1Icon />}
          component={NavLink}
          to="opcao"
        /> */}
      </BottomNavigation>
    </div>
  );
}
