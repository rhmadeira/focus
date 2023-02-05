import { Typography } from "@mui/material";

interface ISubTitleProps {
  children: string;
}

export default function SubTitle({ children }: ISubTitleProps) {
  return (
    <Typography variant="h6" component="h2">
      {children}
    </Typography>
  );
}
