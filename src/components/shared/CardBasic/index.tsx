import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Bgblue500 from "../../../assets/bg-blue500.svg";
import Bggray500 from "../../../assets/bg-gray500.svg";
import Bgtriangulo from "../../../assets/bg-triangulo.svg";

interface CardBasicProps {
  alt: string;
  children: React.ReactNode;
  img: "bgblue500" | "bggray500" | "bgtriangulo";
}

export default function CardBasic({ alt, children, img }: CardBasicProps) {
  return (
    <Card sx={{ width: 200 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="30"
          image={
            img === "bgblue500"
              ? Bgblue500
              : img === "bggray500"
              ? Bggray500
              : Bgtriangulo
          }
          alt={alt}
        />
        <CardContent
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 30,
          }}
        >
          <h3>{children}</h3>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
