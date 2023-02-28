export interface Referencia {
  status: string;
  status_sefaz: string;
  mensagem_sefaz: string;
  chave_nfe: string;
  numero: string;
  serie: string;
  caminho_xml_nota_fiscal: string;
  caminho_danfe: string;
  id: number;
  empresa_id: number;
  nome_emitente: string;
  ref: string;
  tipo: string;
  nome_destinatario: string;
  valor_total: string;
  data_emissao?: Date;
  data_envio: Date;
  http_request_query: string;
  http_request_body: string;
  http_request_ip: string;
  http_request_path: string;
  http_request_host: string;
  http_request_headers?: any;
  nf_post_error_xml: string;
  nf_post_error_trace: string;
  nf_post_error_params: string;
  nf_post_error_query_string: string;
  caminho_xml_cancelamento: string;
}

export interface RootObject {
  referencias: Referencia[];
}
