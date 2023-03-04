import {
  Box,
  Divider,
  Icon,
  Theme,
  Tooltip,
  useMediaQuery,
} from "@mui/material";
import Button from "@mui/material/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { schemaSearchRef, SearchRefFormData } from "./schemas/referenceSchema";
import InputControlled from "../../shared/components/form/InputControlled";
import LayoutFormBase from "../../shared/layouts/LayoutFormBase";
import SubTitle from "../../shared/components/SubTitle";
import { LayoutBasePage } from "../../shared/layouts/LayoutBasePage";
import TableReference from "./components/TableReference";
import { useState } from "react";
import { getReference } from "../../shared/services/reference";
import { IReference } from "../../shared/services/schemas/referenceSchema";

export default function Reference() {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const [isLoading, setIsLoading] = useState(false);
  const [partnersFiltered, setPartnersFiltered] = useState<IReference[]>([]);
  const {
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<SearchRefFormData>({
    resolver: zodResolver(schemaSearchRef),
  });

  async function handleSearchRef(data: SearchRefFormData) {
    try {
      setIsLoading(true);
      const { value } = await getReference(data);
      setPartnersFiltered(value);

      if (data.company) {
        const filtered = value.filter((ref) =>
          ref.nome_emitente
            .toUpperCase()
            .includes(data.company?.toUpperCase() || "")
        );
        setPartnersFiltered(filtered);
      }
      if (data.reference) {
        const filtered = value.filter((ref) =>
          ref.ref.toUpperCase().includes(data.reference?.toUpperCase() || "")
        );
        setPartnersFiltered(filtered);
      }
      if (data.number) {
        const filtered = value.filter((ref) =>
          ref.numero.toUpperCase().includes(data.number?.toUpperCase() || "")
        );
        setPartnersFiltered(filtered);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
      reset();
    }
  }

  return (
    <LayoutBasePage title="Referência">
      <Box
        display="flex"
        flexDirection="column"
        flex="1"
        alignItems="center"
        gap={2}
        marginTop={smDown ? "5px" : "10px"}
      >
        <LayoutFormBase handleSearch={handleSubmit(handleSearchRef)}>
          <SubTitle>Buscar Referência:</SubTitle>
          <Divider />
          <Box
            display="flex"
            justifyContent="space-between"
            gap={2}
            alignItems="center"
          >
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
                size="medium"
              >
                {watch("company") ||
                watch("reference") ||
                watch("number") ||
                watch("nRPS")
                  ? "Buscar"
                  : "Buscar Todos"}
              </Button>
            </Box>
            <Tooltip title="Para pesquisar todos,   não preencher os campos de filtro.">
              <Icon fontSize="small">info</Icon>
            </Tooltip>
          </Box>
        </LayoutFormBase>
        <Box width="100%">
          <TableReference
            referenceData={partnersFiltered}
            isLoading={isLoading}
          />
        </Box>
      </Box>
    </LayoutBasePage>
  );
}
