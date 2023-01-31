import { TextFieldProps } from "@mui/material";
import TextField from "@mui/material/TextField";

type InputBasicProps = TextFieldProps & {
  label: string;
  type?: string;
  size: "small" | "medium";
  bg?: "primary" | "secondary";
};

export default function InputBasic({
  label,
  type,
  bg,
  size,
  ...props
}: InputBasicProps) {
  return (
    <TextField
      type={type}
      label={label}
      variant="outlined"
      size={size}
      sx={{
        backgroundColor: "white",
        borderRadius: "5px",
        border: "none",
        minWidth: 300,
      }}
      {...props}
    />
  );
}
