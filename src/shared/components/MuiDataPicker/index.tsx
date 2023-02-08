import "dayjs/locale/pt";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TextField } from "@mui/material";
import { useState } from "react";
import { Dayjs } from "dayjs";
import {
  CalendarPicker,
  LocalizationProvider,
  ptBR,
} from "@mui/x-date-pickers";

interface IMuiDataPicker {
  textPlaceholder?: string;
}

export default function MuiDataPicker({ textPlaceholder }: IMuiDataPicker) {
  const [value, setValue] = useState<Dayjs | null>(null);

  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      adapterLocale="pt"
      localeText={
        ptBR.components.MuiLocalizationProvider.defaultProps.localeText
      }
    >
      <DatePicker
        label={textPlaceholder}
        value={value}
        onChange={(newValue) => setValue(newValue)}
        renderInput={(params) => <TextField size="small" {...params} />}
      />
    </LocalizationProvider>
  );
}
