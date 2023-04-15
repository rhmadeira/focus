import { Box, Icon, Theme, useMediaQuery } from "@mui/material";
import Button from "@mui/material/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { schemaSearchRef, SearchRefFormData } from "./schemas/referenceSchema";
import InputControlled from "../../shared/components/form/InputControlled";
import { LayoutBasePage } from "../../shared/layouts/LayoutBasePage";
import TableReference from "./components/TableReference";
import { useState } from "react";
import { getAllReference } from "../../shared/services/reference";
import { IReference } from "../../shared/services/schemas/referenceSchema";
import CardReference from "./components/CardReference";
import { useSearch } from "../../shared/services/hooks/useSearch";
import SearchFormBox from "../../shared/components/form/SearchFormBox";

export default function Reference() {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
  const [isLoading, setIsLoading] = useState(false);
  const [partnersFiltered, setPartnersFiltered] = useState<IReference[]>([]);
  const setReference = useSearch((state) => state.setReference);
  const reference = useSearch((state) => state.reference);
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
      if (!reference.length) {
        const { value } = await getAllReference(data);
        setReference(value);
        setPartnersFiltered(value);
      } else {
        setPartnersFiltered(reference);
      }

      if (data.nome_emitente) {
        const filtered = reference.filter((ref) =>
          ref.nome_emitente
            .toUpperCase()
            .includes(data.nome_emitente?.toUpperCase() || "")
        );
        setPartnersFiltered(filtered);
      }
      if (data.ref) {
        const filtered = reference.filter((ref) =>
          ref.ref.toUpperCase().includes(data.ref?.toUpperCase() || "")
        );
        setPartnersFiltered(filtered);
      }
      if (data.numero) {
        const filtered = reference.filter((ref) =>
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
        <SearchFormBox
          title="Buscar Referência"
          showButtonAdd={false}
          handleSearch={handleSubmit(handleSearchRef)}
        >
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
        </SearchFormBox>
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
