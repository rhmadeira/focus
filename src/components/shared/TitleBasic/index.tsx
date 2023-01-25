import { TitleContent } from "./styles";

interface TitleBasicProps {
  children: React.ReactNode;
}

export default function TitleBasic({ children }: TitleBasicProps) {
  return <TitleContent>{children}</TitleContent>;
}
