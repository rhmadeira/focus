import { Box, FormControlLabel } from "@mui/material";
import { MaterialUISwitch } from "./styles";

interface IToggleThemeSwitchProps {
  isDarkTheme: boolean;
  onChange: () => void;
}

export function ToggleThemeSwitch({
  onChange,
  isDarkTheme,
}: IToggleThemeSwitchProps) {
  return (
    <FormControlLabel
      control={<MaterialUISwitch sx={{ m: 0 }} checked={isDarkTheme} />}
      label=""
      onChange={onChange}
    />
  );
}
