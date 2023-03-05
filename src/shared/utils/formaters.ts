export const formatDate = (date: string) => {
  const dateFormated = new Date(date);
  const day = dateFormated.getDate();
  const month = dateFormated.getMonth() + 1;
  const year = dateFormated.getFullYear();
  return `${day}/${month}/${year}`;
};

export const formatDateBr = (date: Date) => {
  const dateInput = new Date(date);
  const formatedate = dateInput.toLocaleDateString("pt-BR");
  return formatedate;
};

export const cnpjMask = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
};

export const telefoneMask = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{4})(\d)/, "$1-$2")
    .replace(/(\d{4})-(\d)(\d{4})/, "$1$2-$3")
    .replace(/(-\d{4})\d+?$/, "$1");
};

export const cepMask = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .replace(/(-\d{3})\d+?$/, "$1");
};

export const cpfMask = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
};

export const coverterMoeda = (value: number) => {
  return value.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
};
export const coverterMoedaSemSimbolo = (value: number) => {
  return value.toLocaleString("pt-br", {
    minimumFractionDigits: 2,
  });
};
