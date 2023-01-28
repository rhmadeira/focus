import styled from "@emotion/styled";

export const ButtonContent = styled.button`
  font-size: 1.2rem;
  font-family: "Roboto";
  cursor: pointer;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  color: var(--white);
  background: var(--blue500);
  min-width: 10rem;
  box-sizing: border-box;

  &:hover {
    background: var(--blue600);
  }
`;
