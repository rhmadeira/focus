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
import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getReference } from "../../shared/services/reference";
import { IReference } from "../../shared/services/schemas/referenceSchema";

export default function Reference() {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const [reference, setReference] = useState<IReference[]>([]);
  // const [partnersFiltered, setPartnersFiltered] = useState<IPartner[]>([]);
  const [searchParams, setsearchParams] = useSearchParams();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchRefFormData>({
    resolver: zodResolver(schemaSearchRef),
  });

  async function handleSearchRef(reference: SearchRefFormData) {
    const { value } = await getReference(reference);
    setReference(value);
    console.log(value);
  }

  //filtro de busca do integra

  // const handleClickButtonFilter = (data: IFormSearch) => {
  //   const Filtered = partners?.data?.filter(
  //     (partner) =>
  //       partner.nome.toUpperCase().includes(data.search.toLocaleUpperCase()) ||
  //       partner.cnpj.toUpperCase().includes(data.search.toLocaleUpperCase()) ||
  //       partner.id.toString().includes(data.search)
  //   );
  //   console.log(Filtered);
  //   if (Filtered) setPartnersFiltered(Filtered);
  // };

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
          <TableReference referenceData={reference} />
        </Box>
      </Box>
    </LayoutBasePage>
  );
}
