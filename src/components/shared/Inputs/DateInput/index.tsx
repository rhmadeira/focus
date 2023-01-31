import * as React from "react";
import { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

interface DateInputProps {
  label: string;
}

export default function DateInput({ label }: DateInputProps) {
  const [value, setValue] = React.useState<Dayjs | null>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label={label}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            size="small"
            sx={{
              ".MuiInputBase-input": {
                width: "100px",
                textAlign: "center",
              },
              backgroundColor: "white",
              borderRadius: "5px",
              border: "none",
            }}
          />
        )}
      />
    </LocalizationProvider>
  );
}
