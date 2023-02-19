import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import {
  Box,
  Button,
  Divider,
  Icon,
  Theme,
  useMediaQuery,
} from "@mui/material";
import SubTitle from "../../../shared/components/SubTitle";
import InputControlled from "../../../shared/components/form/InputControlled";
import LayoutFormBase from "../../../shared/layouts/LayoutFormBase";
import { Outlet } from "react-router-dom";

const schemaSearch = zod.object({
  Query: zod.string().min(1).max(100),
});

export type SearchFormData = zod.infer<typeof schemaSearch>;

export default function SearchRegistration() {
  const { control, handleSubmit } = useForm<SearchFormData>({
    resolver: zodResolver(schemaSearch),
  });
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
  const lgDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"));

  function handleSearch(data: SearchFormData) {
    console.log(data);
  }
  return (
    <Box
      display="flex"
      flexDirection="column"
      flex="1"
      alignItems="center"
      gap={1}
      marginTop={smDown ? "5px" : "10px"}
    >
      <LayoutFormBase handleSearch={handleSubmit(handleSearch)}>
        <SubTitle>Buscar</SubTitle>
        <Divider />
        <Box
          display="flex"
          flexWrap={smDown ? "wrap" : "nowrap"}
          gap={1}
          width="100%"
        >
          <InputControlled
            controller={{
              control,
              name: "Query",
              defaultValue: "",
            }}
            size="small"
            label="Nome ou CPF"
            variant="outlined"
          />
          <Button
            startIcon={<Icon>search</Icon>}
            type="submit"
            variant="contained"
            size="small"
          >
            Buscar
          </Button>
        </Box>
        <Box>
          {/* Aqui vai a busca */}
          <Outlet />
        </Box>
      </LayoutFormBase>
    </Box>
  );
}
