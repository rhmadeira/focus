import { TextFieldProps } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Controller, UseControllerProps } from "react-hook-form";

type InputBasicProps<T extends object> = TextFieldProps & {
  controller?: UseControllerProps<T>;
};

export default function InputControlled<T extends object>({
  controller,
  ...props
}: InputBasicProps<T>) {
  return (
    <>
      {controller ? (
        <Controller
          {...controller}
          render={({ field }) => (
            <TextField
              variant="outlined"
              sx={{
                backgroundColor: "white",
                borderRadius: "5px",
                border: "none",
                fontSize: "1rem",
                minWidth: "100%",
              }}
              {...props}
              {...field}
            />
          )}
        />
      ) : (
        <TextField
          variant="outlined"
          sx={{
            backgroundColor: "white",
            borderRadius: "5px",
            border: "none",
            minWidth: 300,
          }}
          {...props}
        />
      )}
    </>
  );
}
