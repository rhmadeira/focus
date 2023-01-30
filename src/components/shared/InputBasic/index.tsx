import TextField from "@mui/material/TextField";

interface InputBasicProps {
  label: string;
  type?: string;
  field: {
    name: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  };
}

export default function InputBasic({ label, field, type }: InputBasicProps) {
  return (
    <TextField
      id={field.name}
      type={type}
      label={label}
      variant="outlined"
      style={{}}
      {...field}
    />
  );
}
