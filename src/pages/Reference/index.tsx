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

export default function Reference() {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const [partnersFiltered, setPartnersFiltered] = useState<IReference[]>([]);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchRefFormData>({
    resolver: zodResolver(schemaSearchRef),
  });

  async function handleSearchRef(data: SearchRefFormData) {
    try {
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
          {/* <Box
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
            <Box>
              <Button
                startIcon={<Icon>search</Icon>}
                type="submit"
                variant="contained"
                size="medium"
              >
                Buscar
              </Button>
            </Box>
          </Box>
        </LayoutFormBase>
        <Box width="100%">
          <TableReference referenceData={partnersFiltered} />
        </Box>
      </Box>
    </LayoutBasePage>
  );
}
