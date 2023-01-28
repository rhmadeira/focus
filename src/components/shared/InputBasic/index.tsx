import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

interface InputBasicProps {
  label: string;
}

export default function BasicTextFields({ label }: InputBasicProps) {
  return (
    <TextField
      id="outlined-basic"
      label={label}
      variant="outlined"
      style={{}}
    />
  );
}
