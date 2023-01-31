import { Title } from "./styles";

type TitleSubProps = {
  children: React.ReactNode;
};

export default function TitleSub({ children }: TitleSubProps) {
  return <Title>{children}</Title>;
}
