import {
  Icon,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

interface ILinkSideBarProps {
  icon: string;
  open: boolean;
  label: string;
  to: string;
  setOpen: (open: boolean) => void;
}

export function OptionSideBar({
  icon,
  open,
  label,
  to,
  setOpen,
}: ILinkSideBarProps) {
  const resolverPath = useResolvedPath(to);
  const match = useMatch({ path: resolverPath.pathname, end: false });
  return (
    <Tooltip
      title={label}
      placement="right"
      enterDelay={500}
      disableHoverListener={open}
    >
      <Link to={to}>
        <ListItemButton
          selected={!!match}
          sx={{
            minHeight: 48,
            justifyContent: open ? "initial" : "center",
            px: 2.5,
          }}
          onClick={() => setOpen(false)}
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
    </Tooltip>
  );
}
