import TextField from "@mui/material/TextField";

interface InputBasicProps {
  label: string;
  field: {
    name: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  };
}

export default function InputBasic({ label, field }: InputBasicProps) {
  return (
    <TextField
      id="outlined-basic"
      label={label}
      variant="outlined"
      style={{}}
      {...field}
    />
  );
}
