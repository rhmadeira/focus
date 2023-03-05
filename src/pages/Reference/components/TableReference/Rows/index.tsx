import {
  Box,
  Button,
  Collapse,
  Icon,
  IconButton,
  List,
  ListItem,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { IReference } from "../../../../../shared/services/schemas/referenceSchema";
import {
  coverterMoeda,
  formatDate,
} from "../../../../../shared/utils/formaters";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import VisibilityIcon from "@mui/icons-material/Visibility";

interface ITableReferenceProps {
  dataRow: IReference;
}

export default function Rows({ dataRow }: ITableReferenceProps) {
  const [open, setOpen] = useState(false);
  const [openParams, setOpenParams] = useState(false);

  function handleClickRow() {
    setOpen(!open);
  }
  function handleClickParams() {
    setOpenParams(!openParams);
  }
  return (
    <>
      <TableRow
        key={`${dataRow.id}`}
        hover
        onClick={handleClickRow}
        sx={{ cursor: "pointer" }}
      >
        <TableCell>
          <Typography
            color="var(--blue500)"
            fontWeight="bold"
            fontSize="1.05rem"
          >
            {dataRow.ref}
          </Typography>
        </TableCell>
        <TableCell>{dataRow.nome_emitente}</TableCell>
        <TableCell>
          {dataRow.data_emissao && formatDate(dataRow.data_emissao)}
        </TableCell>
        <TableCell>{dataRow.numero}</TableCell>
        <TableCell>{coverterMoeda(+dataRow.valor_total)}</TableCell>
        <TableCell>{dataRow.nome_destinatario}</TableCell>
        <TableCell>{dataRow.status}</TableCell>

        <TableCell align="right">
          <Tooltip title="Ver detalhes">
            <Icon fontSize="small">keyboard_arrow_down</Icon>
          </Tooltip>
          {/* <Tooltip title="DANFE">
            <IconButton size="small">
              <Icon fontSize="small">document_scanner</Icon>
            </IconButton>
          </Tooltip> */}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box display="flex" margin={1} gap={2}>
              <Box>
                <Typography variant="h6" gutterBottom component="div">
                  Detalhes
                </Typography>
                <List dense>
                  <ListItem>
                    <Typography variant="body2">
                      <strong>Chave da Nf-e:</strong> {dataRow.chave_nfe}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography variant="body2">
                      <strong>Status Sefaz:</strong> {dataRow.status_sefaz}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography variant="body2">
                      <strong>Mensagem Sefaz:</strong>{" "}
                      {dataRow.mensagem_sefaz?.replace(/\\n/g, " ")}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography variant="body2">
                      <strong>Requisição:</strong>{" "}
                      {`${dataRow.http_request_host}${dataRow.http_request_path}?${dataRow.http_request_query}`}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography variant="body2">
                      <strong>IP de origem:</strong>{" "}
                      {`${dataRow.http_request_ip}`}
                    </Typography>
                  </ListItem>
                </List>
                <Stack direction="row" spacing={2}>
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

              <Box>
                <Table size="small">
                  <TableHead>
                    <TableRow hover onClick={handleClickParams}>
                      <TableCell>Parametros recebidos</TableCell>
                      <TableCell align="right">
                        {!openParams && (
                          <IconButton size="small">
                            <VisibilityIcon fontSize="small" />
                          </IconButton>
                        )}
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell
                        style={{ paddingBottom: 0, paddingTop: 0 }}
                        colSpan={6}
                      >
                        <Collapse in={openParams} timeout="auto" unmountOnExit>
                          <Box
                            margin={1}
                            gap={2}
                            lineHeight="1.5rem"
                            overflow="auto"
                            height="150px"
                            width={{ xs: "100%", md: "450px" }}
                            sx={{
                              wordBreak: "break-all",
                              wordWrap: "break-word",
                              overflowX: "auto",
                              display: "block",
                            }}
                          >
                            <Typography fontSize="0.8rem">
                              {dataRow.http_request_body}
                            </Typography>
                          </Box>
                        </Collapse>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Box>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}
