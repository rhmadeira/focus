import { FormControlLabel } from "@mui/material";
import Switch from "@mui/material/Switch";
import { MaterialUISwitch } from "./styles";

interface IToggleThemeSwitchProps {
  onChange: () => void;
}

export function ToggleThemeSwitch({ onChange }: IToggleThemeSwitchProps) {
  return (
    <FormControlLabel
      control={<MaterialUISwitch sx={{ m: 1 }} />}
      label=""
      onChange={onChange}
    />
  );
}
