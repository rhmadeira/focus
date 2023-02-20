import {
  Box,
  Button,
  Divider,
  Icon,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useForm } from "react-hook-form";
import LayoutFormBase from "../../../shared/layouts/LayoutFormBase";
import {
  NewCollaboratorData,
  schemaNewCollaborator,
} from "../schemas/colaboratorsSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import SubTitle from "../../../shared/components/SubTitle";
import InputControlled from "../../../shared/components/form/InputControlled";
import SelectControlled from "../../../shared/components/form/SelectControlled";
import { setColaborator } from "../../../shared/services/api/register";

export function NewCollaborators() {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<NewCollaboratorData>({
    resolver: zodResolver(schemaNewCollaborator),
  });
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const handleNewCollaborators = async (data: NewCollaboratorData) => {
    try {
      const response = await setColaborator(data);
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      reset();
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={1}
      marginTop={smDown ? "2px" : "5px"}
      flex="1"
      alignItems="center"
    >
      <LayoutFormBase handleSearch={handleSubmit(handleNewCollaborators)}>
        <SubTitle>Novo Colaborador</SubTitle>
        <Divider />
        <Box
          display="flex"
          flex={1}
          gap={2}
          flexWrap={{ xs: "wrap", sm: "nowrap" }}
        >
          <InputControlled
            controller={{ name: "name", control, defaultValue: "" }}
            label="Nome"
            size="small"
            required
            {...(errors.name && {
              error: true,
              helperText: errors.name.message,
            })}
          />
          <InputControlled
            controller={{ name: "email", control, defaultValue: "" }}
            label="Email"
            size="small"
            required
            {...(errors.email && {
              error: true,
              helperText: errors.email.message,
            })}
          />
          <InputControlled
            controller={{ name: "password", control, defaultValue: "" }}
            label="Senha"
            size="small"
            type="password"
            required
            {...(errors.password && {
              error: true,
              helperText: errors.password.message,
            })}
          />
        </Box>
        <Box display="flex" flexDirection="column" gap={2} maxWidth="400px">
          <Typography variant="h6">Permissões</Typography>
          <Typography>Selecione abaixo as permissões do usuário:</Typography>
          <SelectControlled
            controller={{ name: "permission", control, defaultValue: 0 }}
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
            size="small"
            startIcon={<Icon>add</Icon>}
          >
            Salvar
          </Button>
        </Box>
      </LayoutFormBase>
    </Box>
  );
}
