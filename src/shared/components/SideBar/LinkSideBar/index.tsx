import {
  Icon,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

interface ILinkSideBarProps {
  icon: string;
  open: boolean;
  label: string;
  to: string;
}

export function LinkSideBar({ icon, open, label, to }: ILinkSideBarProps) {
  const resolverPath = useResolvedPath(to);
  const match = useMatch({ path: resolverPath.pathname, end: false });
  return (
    <Link to={to}>
      <ListItemButton
        selected={!!match}
        sx={{
          minHeight: 48,
          justifyContent: open ? "initial" : "center",
          px: 2.5,
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: open ? 3 : "auto",
            justifyContent: "center",
          }}
        >
          <Icon color={open ? "primary" : "secondary"}>{icon}</Icon>
        </ListItemIcon>
        <ListItemText primary={label} sx={{ opacity: open ? 1 : 0 }} />
      </ListItemButton>
    </Link>
  );
}
