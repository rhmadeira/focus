import { Box, Divider, Icon, Theme, useMediaQuery } from "@mui/material";
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
import CardReference from "./components/CardReference";

export default function Reference() {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
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

      if (data.nome_emitente) {
        const filtered = value.filter((ref) =>
          ref.nome_emitente
            .toUpperCase()
            .includes(data.nome_emitente?.toUpperCase() || "")
        );
        setPartnersFiltered(filtered);
      }
      if (data.ref) {
        const filtered = value.filter((ref) =>
          ref.ref.toUpperCase().includes(data.ref?.toUpperCase() || "")
        );
        setPartnersFiltered(filtered);
      }
      if (data.numero) {
        const filtered = value.filter((ref) =>
          ref.numero.toUpperCase().includes(data.numero?.toUpperCase() || "")
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
            flexDirection={{ xs: "column", sm: "row" }}
          >
            <Box
              display="flex"
              flex={1}
              gap={smDown ? 1 : 2}
              flexWrap={{ xs: "wrap", sm: "nowrap" }}
              minWidth="200px"
            >
              <InputControlled
                controller={{
                  control,
                  name: "nome_emitente",
                  defaultValue: "",
                }}
                label="Empresa"
                size="small"
                type="text"
              />
              <InputControlled
                controller={{
                  control,
                  name: "ref",
                  defaultValue: "",
                }}
                label="Referência"
                size="small"
              />

              <InputControlled
                controller={{
                  control,
                  name: "numero",
                  defaultValue: "",
                }}
                label="Número"
                size="small"
              />
            </Box>

            <Box display="flex">
              <Button
                startIcon={<Icon>search</Icon>}
                type="submit"
                variant="contained"
                size="medium"
              >
                {watch("nome_emitente") || watch("ref") || watch("numero")
                  ? "Buscar"
                  : "Buscar Todos"}
              </Button>
            </Box>
          </Box>
        </LayoutFormBase>
        <Box width="100%">
          {mdDown ? (
            <CardReference
              referenceData={partnersFiltered}
              isLoading={isLoading}
            />
          ) : (
            <TableReference
              referenceData={partnersFiltered}
              isLoading={isLoading}
            />
          )}
        </Box>
      </Box>
    </LayoutBasePage>
  );
}
