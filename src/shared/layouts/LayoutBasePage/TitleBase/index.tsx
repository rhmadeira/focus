import { ContainerTitle, TitleContent } from "./styles";

interface TitleBasicProps {
  children: React.ReactNode;
}

export default function TitleBasic({ children }: TitleBasicProps) {
  return (
    <ContainerTitle>
      <TitleContent>{children}</TitleContent>
    </ContainerTitle>
  );
}
