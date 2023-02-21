import { Box, Switch } from "@mui/material";
import { useState } from "react";

interface IFiscalDocumentsProps {
  controller: [any];
  label: string;
}

export default function FiscalDocuments({
  controller,
  label,
}: IFiscalDocumentsProps) {
  const [checked, setChecked] = useState({
    NFe: false,
    NFSe: false,
    NFCe: false,
    CTe: false,
    MDFe: false,
    RecNFes: false,
    RecCTes: false,
  });
  return (
    <Box>
      <Box>
        <Switch
          checked={checked.NFe}
          onChange={(event) => {
            setChecked({ ...checked, NFe: event.target.checked });
          }}
          inputProps={{ "aria-label": "controlled" }}
        />
        <label>NFe:</label>
      </Box>
      <Box>
        <Switch
          checked={checked.NFSe}
          onChange={(event) => {
            setChecked({ ...checked, NFSe: event.target.checked });
          }}
          inputProps={{ "aria-label": "controlled" }}
        />
        <label>NFSe</label>
      </Box>
      <Box>
        <Switch
          checked={checked.NFCe}
          onChange={(event) => {
            setChecked({ ...checked, NFCe: event.target.checked });
          }}
          inputProps={{ "aria-label": "controlled" }}
        />
        <label>NFCe</label>
      </Box>
      <Box>
        <Switch
          checked={checked.CTe}
          onChange={(event) => {
            setChecked({ ...checked, CTe: event.target.checked });
          }}
          inputProps={{ "aria-label": "controlled" }}
        />
        <label>CTe</label>
      </Box>
      <Box>
        <Switch
          checked={checked.MDFe}
          onChange={(event) => {
            setChecked({ ...checked, MDFe: event.target.checked });
          }}
          inputProps={{ "aria-label": "controlled" }}
        />
        <label>MDFe</label>
      </Box>
      <Box>
        <Switch
          checked={checked.RecNFes}
          onChange={(event) => {
            setChecked({ ...checked, RecNFes: event.target.checked });
          }}
          inputProps={{ "aria-label": "controlled" }}
        />
        <label>RecNFes</label>
      </Box>
      <Box>
        <Switch
          checked={checked.RecCTes}
          onChange={(event) => {
            setChecked({ ...checked, RecCTes: event.target.checked });
          }}
          inputProps={{ "aria-label": "controlled" }}
        />
        <label>RecCTes</label>
      </Box>
    </Box>
  );
}
