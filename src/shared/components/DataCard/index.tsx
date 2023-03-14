import * as React from "react";
import { styled, Theme, useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Divider,
  List,
  ListItem,
  Stack,
  Tooltip,
  useMediaQuery,
} from "@mui/material";
import {
  coverterMoeda,
  coverterMoedaSemSimbolo,
  formatDate,
} from "../../utils/formaters";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}
interface DataCardProps {
  reference: string;
  company: string;
  emission: string;
  number: string;
  value: string;
  name: string;
  status: string;
  chave_nfe: string;
  status_sefaz: string;
  mensagem_sefaz: string;
  isLoading: boolean;
  request_host: string;
  request_path: string;
  request_query: string;
  request_ip: string;
  http_request_body: string;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function DataCard({
  company,
  name,
  emission,
  number,
  reference,
  status,
  value,
  chave_nfe,
  status_sefaz,
  mensagem_sefaz,
  isLoading,
  request_host,
  request_path,
  request_query,
  request_ip,
  http_request_body,
}: DataCardProps) {
  const [expanded, setExpanded] = React.useState(false);
  const theme = useTheme();
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ minWidth: 275, marginBottom: 1 }}>
      <CardContent>
        <Box
          marginBottom={1}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box>
            <Typography fontWeight="bold">{company}</Typography>
          </Box>
          <Box>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </Box>
        </Box>

        <Box
          display="flex"
          justifyContent="space-between"
          width="100%"
          gap={1}
          alignItems="center"
        >
          <Box display="flex" flexDirection="column" borderRadius={1}>
            <Typography
              color={theme.palette.primary.main}
              alignSelf="center"
              fontSize="0.8rem"
            >
              Ref.
            </Typography>
            <Divider />
            <Typography alignSelf="center" fontSize="0.8rem">
              {reference}
            </Typography>
          </Box>
          <Box display="flex" flexDirection="column" borderRadius={1}>
            <Typography
              color={theme.palette.primary.main}
              alignSelf="center"
              fontSize="0.8rem"
            >
              Emissão
            </Typography>
            <Divider />
            <Typography alignSelf="center" fontSize="0.8rem">
              {formatDate(emission)}
            </Typography>
          </Box>
          <Box display="flex" flexDirection="column" borderRadius={1}>
            <Typography
              color={theme.palette.primary.main}
              alignSelf="center"
              fontSize="0.8rem"
            >
              Valor
            </Typography>
            <Divider />
            <Typography alignSelf="center" fontSize="0.8rem">
              {coverterMoedaSemSimbolo(+value)}
            </Typography>
          </Box>
          <Box display="flex" flexDirection="column" borderRadius={1}>
            <Typography
              color={theme.palette.primary.main}
              alignSelf="center"
              fontSize="0.8rem"
            >
              Status
            </Typography>
            <Divider lang="" />
            <Typography alignSelf="center" fontSize="0.8rem">
              {status}
            </Typography>
          </Box>
        </Box>
      </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Box
            display="flex"
            flexDirection="column"
            width={smDown ? "240px" : "500px"}
          >
            <Typography variant="h6">Detalhes</Typography>
            <List dense>
              <ListItem>
                <Tooltip title={chave_nfe}>
                  <Typography
                    fontSize="0.8rem"
                    variant="body2"
                    {...(smDown && {
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                    })}
                  >
                    <strong>Chave da Nf-e:</strong> <br /> {chave_nfe}
                  </Typography>
                </Tooltip>
              </ListItem>
              <ListItem>
                <Typography fontSize="0.8rem" variant="body2">
                  <strong>Status Sefaz:</strong> <br /> {status_sefaz}
                </Typography>
              </ListItem>
              <ListItem>
                <Typography fontSize="0.8rem" variant="body2">
                  <strong>Mensagem Sefaz:</strong>{" "}
                  {mensagem_sefaz?.replace(/\\n/g, " ")}
                </Typography>
              </ListItem>
              <ListItem>
                <Typography fontSize="0.8rem" variant="body2">
                  <strong>Requisição:</strong> <br />
                  {`${request_host}${request_path}?${request_query}`}
                </Typography>
              </ListItem>
              <ListItem>
                <Typography fontSize="0.8rem" variant="body2">
                  <strong>IP de origem:</strong> <br /> {`${request_ip}`}
                </Typography>
              </ListItem>
            </List>
            <Stack direction="row" spacing={1}>
              <Button
                size="small"
                variant="text"
                startIcon={<FileDownloadIcon />}
              >
                XML
              </Button>
              <Button
                size="small"
                variant="text"
                startIcon={<FileDownloadIcon fontSize="small" />}
              >
                SEFAZ
              </Button>
            </Stack>
          </Box>
          <Box
            maxHeight="600px"
            sx={{
              wordBreak: "break-all",
              wordWrap: "break-word",
              overflowX: "auto",
              display: "block",
            }}
          >
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Parametros Recebidos</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{http_request_body}</Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </CardContent>
      </Collapse>
    </Card>
  );
}
