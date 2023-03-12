import { Box, Pagination, Skeleton, Theme, useMediaQuery } from "@mui/material";
import DataCard from "../../../../shared/components/DataCard";
import { IReference } from "../../../../shared/services/schemas/referenceSchema";

interface CardReferenceProps {
  referenceData: IReference[];
  isLoading: boolean;
}

export default function CardReference({
  referenceData,
  isLoading,
}: CardReferenceProps) {
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  return (
    <Box flex={1} overflow="auto" marginTop={mdDown ? "5px" : "10px"}>
      {isLoading ? (
        <Box height="500px" display="flex" flexDirection="column">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Skeleton key={item} height={150} />
          ))}
        </Box>
      ) : (
        referenceData.map((ref) => (
          <DataCard
            key={ref.id}
            reference={ref.ref}
            company={ref.nome_emitente}
            emission={ref.data_emissao}
            number={ref.numero}
            value={ref.valor_total}
            name={ref.nome_destinatario}
            status={ref.status}
            chave_nfe={ref.chave_nfe}
            status_sefaz={ref.status_sefaz}
            mensagem_sefaz={ref.mensagem_sefaz}
            isLoading={isLoading}
            request_host={ref.http_request_host}
            request_path={ref.http_request_path}
            request_query={ref.http_request_query}
            request_ip={ref.http_request_ip}
            http_request_body={ref.http_request_body}
          />
        ))
      )}
    </Box>
  );
}
