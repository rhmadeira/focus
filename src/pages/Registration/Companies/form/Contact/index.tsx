import { useForm } from "react-hook-form";
import InputControlled from "../../../../../shared/components/InputControlled";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schemaContact = zod.object({
  telefone: zod.string(),
});

type TContactProps = zod.infer<typeof schemaContact>;

export default function Contact() {
  const { control } = useForm<TContactProps>({
    resolver: zodResolver(schemaContact),
  });
  return (
    <InputControlled
      controller={{ name: "telefone", control, defaultValue: "" }}
      size="small"
      label="Telefone"
    />
  );
}
