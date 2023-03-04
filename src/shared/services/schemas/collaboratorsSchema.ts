export interface ICollaborator {
  id: number;
  email: string;
  full_name: string;
  admin: boolean;
  is_domain_admin: boolean;
  perm_basics: boolean;
  perm_nfe: boolean;
  perm_sales: boolean;
  perm_fin: boolean;
  perm_stock: boolean;
  perm_stock_transfer: boolean;
  locale: string;
  perm_billing: boolean;
  perm_issuers: boolean;
  perm_requests: boolean;
  perm_companies: boolean;
  perm_outbound: boolean;
  user_store_ids: number[];
}
