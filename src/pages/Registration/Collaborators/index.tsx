import { Box, Button, Divider, Icon, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import LayoutFormBase from "../../../shared/layouts/LayoutFormBase";
import { schemaNewCollaborator } from "../schemas/colaboratorsSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import SubTitle from "../../../shared/components/SubTitle";
import InputControlled from "../../../shared/components/InputControlled";
import SelectControlled from "../../../shared/components/SelectControlled";

export type NewCollaboratorData = Zod.infer<typeof schemaNewCollaborator>;

export default function Collaborators() {
  const { handleSubmit, control } = useForm<NewCollaboratorData>({
    resolver: zodResolver(schemaNewCollaborator),
  });
  function handleNewCollaborators(data: NewCollaboratorData) {
    console.log(data);
  }
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={2}
      marginTop="10px"
      flex="1"
      alignItems="center"
    >
      <LayoutFormBase handleSearch={handleSubmit(handleNewCollaborators)}>
        <SubTitle>Novo Colaborador:</SubTitle>
        <Divider />
        <Box
          display="flex"
          marginTop={2}
          flex={1}
          gap={1}
          flexWrap={{ xs: "wrap", sm: "nowrap" }}
        >
          <InputControlled
            controller={{ name: "name", control, defaultValue: "" }}
            label="Nome"
            size="small"
          />
          <InputControlled
            controller={{ name: "email", control, defaultValue: "" }}
            label="Email"
            size="small"
          />
          <InputControlled
            controller={{ name: "password", control, defaultValue: "" }}
            label="Senha"
            size="small"
          />
        </Box>
        <Box display="flex" flexDirection="column" gap={2} maxWidth="400px">
          <Typography variant="h6">Permissões</Typography>
          <Typography>Selecione abaixo as permissões do usuário:</Typography>
          <SelectControlled
            controller={{ name: "permission", control, defaultValue: "0" }}
            arrayMenuItem={[
              { index: 0, label: "Padrão" },
              { index: 1, label: "Administrador" },
            ]}
            size="small"
            textSelect="Selecione uma opção"
          />
        </Box>
        <Box alignSelf="flex-end">
          <Button
            type="submit"
            variant="contained"
            startIcon={<Icon>add</Icon>}
          >
            Salvar
          </Button>
        </Box>
      </LayoutFormBase>
    </Box>
  );
}
