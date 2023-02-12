import { UseControllerProps, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputControlled from "../../../../../shared/components/InputControlled";
import * as zod from "zod";

const schemaContact = zod.object({
  cnpj: zod.string(),
});
type IIdenticationProps<T extends object> = {
  controller?: UseControllerProps<T>;
};

export type TIdentificationProps = zod.infer<typeof schemaContact>;

export default function Identification({
  controller,
}: IIdenticationProps<TIdentificationProps>) {
  const { control } = useForm<TIdentificationProps>({
    resolver: zodResolver(schemaContact),
  });
  return (
    <InputControlled
      controller={{ name: "cnpj", control, defaultValue: "" }}
      size="small"
      label="Cnpj"
    />
  );
}
