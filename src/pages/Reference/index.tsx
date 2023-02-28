import { Box, Divider, Icon, Theme, useMediaQuery } from "@mui/material";
import Button from "@mui/material/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  schemaSearchApi,
  schemaSearchRef,
  SearchRefFormData,
} from "./schemas/referenceSchema";
import InputControlled from "../../shared/components/form/InputControlled";
import MuiDataPicker from "../../shared/components/form/MuiDataPicker";
import LayoutFormBase from "../../shared/layouts/LayoutFormBase";
import SubTitle from "../../shared/components/SubTitle";
import { LayoutBasePage } from "../../shared/layouts/LayoutBasePage";

export default function Reference() {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchRefFormData>({
    resolver: zodResolver(schemaSearchRef),
  });

  function handleSearchRef(data: SearchRefFormData) {
    return;
  }
  return (
    <LayoutBasePage title="Referência">
      <Box
        display="flex"
        flexDirection="column"
        flex="1"
        alignItems="center"
        gap={2}
        marginTop={smDown ? "10px" : "20px"}
      >
        <LayoutFormBase handleSearch={handleSubmit(handleSearchRef)}>
          <SubTitle>Buscar Referência:</SubTitle>
          <Divider />
          {/* <Box
          display="flex"
          marginTop={2}
          alignItems="center"
          gap={2}
          flexWrap={{ xs: "wrap", sm: "nowrap" }}
        >
          <MuiDataPicker
            controller={{ name: "dateStart", control, defaultValue: "" }}
            textPlaceholder="Data inicial"
          />
          {smDown ? null : <Typography component="span">Até</Typography>}
          <MuiDataPicker
            controller={{ name: "dateEnd", control, defaultValue: "" }}
            textPlaceholder="Data final"
          />
        </Box> */}
          <Box
            display="flex"
            flex={1}
            gap={smDown ? 1 : 2}
            flexWrap={{ xs: "wrap", sm: "nowrap" }}
          >
            <InputControlled
              controller={{
                control,
                name: "company",
                defaultValue: "",
              }}
              label="Empresa"
              size="small"
              type="text"
            />
            <InputControlled
              controller={{
                control,
                name: "reference",
                defaultValue: "",
              }}
              label="Referência"
              size="small"
            />
          </Box>
          <Box
            display="flex"
            flex={1}
            gap={smDown ? 1 : 2}
            flexWrap={{ xs: "wrap", sm: "nowrap" }}
          >
            <InputControlled
              controller={{
                control,
                name: "number",
                defaultValue: "",
              }}
              label="Número"
              size="small"
            />
            <InputControlled
              controller={{
                control,
                name: "nRPS",
                defaultValue: "",
              }}
              label="N.RPS"
              size="small"
            />
          </Box>
          <Box>
            <Button
              startIcon={<Icon>search</Icon>}
              type="submit"
              variant="contained"
              size="small"
            >
              Buscar
            </Button>
          </Box>
        </LayoutFormBase>
      </Box>
    </LayoutBasePage>
  );
}
