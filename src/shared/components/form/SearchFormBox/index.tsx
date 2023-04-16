import {
  Box,
  Button,
  Divider,
  Icon,
  Paper,
  Theme,
  useMediaQuery,
} from "@mui/material";
import {
  BodyContainer,
  FormBox,
  FormBoxContainer,
  HeaderContainer,
} from "./styles";
import SubTitle from "../../SubTitle";

interface ILayoutFormBaseProps {
  title: string;
  titleButton?: string;
  showButtonAdd?: boolean;
  titleButtonSearch?: string;
  handleSearch?: () => void;
  handleButtonAdd?: () => void;
  children?: React.ReactNode;
}

export default function SearchFormBox({
  handleSearch,
  handleButtonAdd,
  titleButtonSearch,
  children,
  title,
  titleButton,
  showButtonAdd = true,
}: ILayoutFormBaseProps) {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  return (
    <FormBoxContainer
      component={Paper}
      sx={{
        padding: {
          xs: 1,
          sm: 1,
          md: 2,
          lg: 3,
        },
        gap: {
          xs: 1,
          sm: 2,
        },
      }}
      className="animeLeft"
    >
      <FormBox onSubmit={handleSearch}>
        <HeaderContainer>
          <SubTitle>{title}</SubTitle>
          {showButtonAdd && (
            <Button
              type="button"
              onClick={handleButtonAdd}
              startIcon={<Icon>add</Icon>}
              variant={smDown ? "text" : "outlined"}
            >
              {titleButton}
            </Button>
          )}
        </HeaderContainer>
        <Divider />
        <BodyContainer>
          {children}
          <Box>
            <Button
              startIcon={<Icon>search</Icon>}
              type="submit"
              variant="contained"
              size="small"
            >
              {titleButtonSearch}
            </Button>
          </Box>
        </BodyContainer>
      </FormBox>
    </FormBoxContainer>
  );
}
