import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { Box, Button, Icon, Paper, Theme, useMediaQuery } from "@mui/material";
import SubTitle from "../../../shared/components/SubTitle";
import InputControlled from "../../../shared/components/InputControlled";

const schemaSearch = zod.object({
  Query: zod.string().min(1).max(100),
});

export type SearchFormData = zod.infer<typeof schemaSearch>;

export default function SearchRegistration() {
  const { control, handleSubmit } = useForm<SearchFormData>({
    resolver: zodResolver(schemaSearch),
  });
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  function handleSearch(data: SearchFormData) {
    console.log(data);
  }
  return (
    <Box display="flex" flexDirection="column" gap={2} marginTop="10px">
      <SubTitle>Buscar:</SubTitle>
      <Box component="form" onSubmit={handleSubmit(handleSearch)}>
        <Box component={Paper} padding={2} maxWidth="600px">
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
              endIcon={<Icon>search</Icon>}
              type="submit"
              variant="contained"
              size="small"
            >
              Buscar
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
