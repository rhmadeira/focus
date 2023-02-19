import { Box } from "@mui/material";
import InputControlled from "../../../../../../shared/components/form/InputControlled";

interface IFiscalDocumentsProps {
  controller: [any];
  label: string;
}

export default function FiscalDocuments({
  controller,
  label,
}: IFiscalDocumentsProps) {
  return (
    <Box>
      <InputControlled controller={controller[0]} label={label} />
    </Box>
  );
}
