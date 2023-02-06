import { Box, FormControlLabel } from "@mui/material";
import { MaterialUISwitch } from "./styles";

interface IToggleThemeSwitchProps {
  onChange: () => void;
}

export function ToggleThemeSwitch({ onChange }: IToggleThemeSwitchProps) {
  return (
    <FormControlLabel
      control={<MaterialUISwitch sx={{ m: 0 }} size="small" />}
      label=""
      onChange={onChange}
    />
  );
}
