import "dayjs/locale/pt";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TextField, TextFieldProps } from "@mui/material";
import { useState } from "react";
import { Dayjs } from "dayjs";
import { LocalizationProvider, ptBR } from "@mui/x-date-pickers";
import { Controller, UseControllerProps } from "react-hook-form";

type IMuiDataPicker<T extends object> = TextFieldProps & {
  controller: UseControllerProps<T>;
  textPlaceholder: string;
};

export default function MuiDataPicker<T extends object>({
  textPlaceholder,
  controller,
}: IMuiDataPicker<T>) {
  const [value, setValue] = useState<Dayjs | null>(null);

  return (
    <Controller
      {...controller}
      render={({ field }) => (
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          adapterLocale="pt"
          localeText={
            ptBR.components.MuiLocalizationProvider.defaultProps.localeText
          }
        >
          <DatePicker
            // value={value}
            {...field}
            // onChange={(newValue) => setValue(newValue)}
          />
        </LocalizationProvider>
      )}
    />
  );
}
